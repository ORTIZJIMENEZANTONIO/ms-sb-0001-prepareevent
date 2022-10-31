import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { CatTransferentEntity } from "./entities/cat-transferent.entity";
import { RecordEntity } from "./entities/record.entity";
import { ParameterModEntity } from "./entities/comer-parameter-mod.entity";
import { CatLabelEntity } from "./entities/cat-label.entity";
import { ComerRejectedPropertyEntity } from "../comer-rejected-property/entities/comer-rejected-property.entity";
import { ActGoodLotMDto } from "./dto/act-good-lot-m.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";

@Injectable()
export class PaProcessService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @InjectRepository(GoodsEntity)
    private entityGoods: Repository<ComerEventEntity>,
    @InjectRepository(ComerLotsEntity)
    private entityComerLot: Repository<ComerLotsEntity>,
    @InjectRepository(ComerRejectedPropertyEntity)
    private entityComerRejected: Repository<ComerRejectedPropertyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("pa_process_served") public counter: Counter<string>
  ) {}

  async paActGoodLotMDto(params: ActGoodLotMDto) {
    const { lotId, goodNumber, address } = params;
    const good = await this.entityGoods
      .createQueryBuilder()
      .select([`NO_CLASIF_BIEN as "vClasif"`, `CANTIDAD as "vQuantity"`])
      .where(`NO_BIEN=${goodNumber}`)
      .getRawOne();

    const comerLotSubquery = this.entityComerLot
      .createQueryBuilder()
      .select(`ID_EVENTO as "eventId"`)
      .where(`ID_LOTE = ${lotId}`);

    const event = await this.entityComerEvent
      .createQueryBuilder()
      .select([`ID_TPEVENTO`, `ID_EVENTO`])
      .where(`ID_EVENTO = (${comerLotSubquery.getQuery()})`)
      .getRawOne();
  }

  async paReject(params: PaRejectDto) {
    const { eventId, goodNumber, eventType, lotId, address, origin, pubLot } =
      params;

    const whereBase = `BL.NO_BIEN=BIE.NO_BIEN AND BL.ID_LOTE=${lotId} AND BL.NO_BIEN=${goodNumber}`;
    const queryResult = {
      created: 0,
      createdErrors: 0,
      updated: 0,
      updatedErrors: 0,
    };

    const prQuery1 = this.entityGoods
      .createQueryBuilder(`bie`)
      .select([
        `bie.NO_BIEN`,
        `bie.DESCRIPCION`,
        `bie.ESTATUS`,
        `'||''''||EL MANDATO '||''''||' '||
        '||'||CAT.CVMAN||'||'||''''||' NO SE PUEDE COMERCIALIZAR'||''''||'' as causa, 3 as tipo, NULL as EVENTOLOT , NULL as LOTEPUB `,
      ])
      .addFrom(ComerGoodsXLotEntity, "bl")
      .addFrom(CatTransferentEntity, "cat")
      .addFrom(RecordEntity, "exd")
      .addFrom(ParameterModEntity, "par")
      .where(whereBase)
      .andWhere(`cat.CVMAN = par.VALOR `)
      .andWhere(`bie.NO_EXPEDIENTE = exd.NO_EXPEDIENTE `)
      .andWhere(`exd.NO_TRANSFERENTE = cat.NO_TRANSFERENTE`)
      .andWhere(`par.PARAMETRO = 'RESTMAND'`)
      .andWhere(`par.DIRECCION = '${address}'`);

    const prQuery2 = this.entityGoods
      .createQueryBuilder(`bie`)
      .select([
        `bie.NO_BIEN`,
        `bie.DESCRIPCION`,
        `bie.ESTATUS`,
        ` '||''''||LA ETIQUETA '||''''||
        '||'||cat.DESCRIPCION||'||'||''''||' NO SE PUEDE COMERCIALIZAR'||'''' as CAUSA,4 TIPO, NULL EVENTOLOT, NULL LOTEPUB`,
      ])
      .addFrom(ComerGoodsXLotEntity, "bl")
      .addFrom(ParameterModEntity, "par")
      .addFrom(CatLabelEntity, "cat")
      .where(whereBase)
      .andWhere(`bie.NO_ETIQUETA = cat.NO_ETIQUETA`)
      .andWhere(`par.DIRECCION ='${address}'`)
      .andWhere(`par.PARAMETRO = 'ETIQUETANP'`)
      .andWhere(`bie.NO_ETIQUETA = par.VALOR::numeric`);

    const prQuery3 = this.entityGoods
      .createQueryBuilder(`bie`)
      .select([
        `bie.NO_BIEN`,
        `bie.DESCRIPCION`,
        `bie.ESTATUS`,
        `'||''''||No es un bien del programa de desalojo'||''''||'R1_CAUSA, 5 TIPO '||
        ', NULL EVENTOLOT, NULL LOTEPUB ' as concat `,
      ])
      .addFrom(ComerGoodsXLotEntity, "bl")
      .where(whereBase)
      .andWhere(`BIE.ESTATUS IN ('VXR', 'VXP')`)
      .andWhere(
        `NOT EXISTS (SELECT 1 FROM sera.BIENES_CARGA_MASIVA BCM WHERE BCM.NO_BIEN=BIE.NO_BIEN AND BCM.DESALOJO_DIADIA=1)`
      );

    const prQueryAddress = this.entityGoods
      .createQueryBuilder(`bie`)
      .select([
        `bie.NO_BIEN`,
        `bie.DESCRIPCION`,
        `bie.ESTATUS`,
        `'||''''||'||'No cuenta con avaluo'||'''' as  CAUSA`,
        `NULL TIPO`,
        `NULL EVENTOLOT`,
        `NULL LOTEPUB`,
      ])
      .addFrom(ComerGoodsXLotEntity, "bl")
      .where(
        `NOT EXISTS (SELECT 1 FROM comer.BIENES_TRANS_AVA AVA WHERE AVA.NO_BIEN=bie.NO_BIEN) AND bl.NO_BIEN = bie.NO_BIEN AND bl.ID_LOTE=${lotId} AND bl.NO_BIEN=${goodNumber}`
      ).andWhere(`NOT EXISTS ( SELECT 1 
    FROM sera.COMER_DETAVALUO DA
    WHERE DA.NO_BIEN=bie.NO_BIEN
    limit 1 )`);

    const results = [
      ...(await prQuery1.getRawMany()),
      ...(await prQuery2.getRawMany()),
      ...(await prQuery3.getRawMany()),
      ...(eventType != 5 && eventType != 6 && (address == "M" || address == "I")
        ? await prQueryAddress.getRawMany()
        : []),
    ];

    for (const result of results) {
      const exists = await this.entityComerRejected
        .createQueryBuilder("cr")
        .select([`COUNT(1)`])
        .where(`no_bien = ${result.no_bien}`)
        .andWhere(`ID_EVENTO=${eventId}`)
        .getRawOne();

      if (exists.count == 0) {
        // const newId = await this.entityComerRejected.query(
        //   `SELECT NEXTVAL('sera.SEQ_COMER_BIENRECHAZADO') as val`
        // );
        // const newId = newIdQr[0].val;
        const newIdQr = await this.entityComerRejected.query(
          `Select id_bienrechazado from sera.comer_bienesrechazados order by id_bienrechazado desc limit 1`
        );
        const newId = newIdQr[0] ? newIdQr + 1 : 1;

        try {
          await this.entityComerRejected.save({
            id: newId,
            eventId: eventId,
            propertyNumber: goodNumber,
            origin: origin,
            description: result.descripcion,
            status: result.estatus,
            cause: result.causa,
            event: null,
            batchPublic: result.pubLot,
            rejectedReason: result.tipo,
            batchOrigin: pubLot,
          });
          queryResult.created++;
        } catch (error) {
          console.error(error.detail ?? error);
          queryResult.createdErrors++;
        }
      } else {
        const existingObject = await this.entityComerRejected
          .createQueryBuilder()
          .select([`causa`])
          .where(`no_bien = ${goodNumber}`)
          .andWhere(`ID_EVENTO = ${eventId}`)
          .getRawOne();

        const { affected } = await this.entityComerRejected
          .createQueryBuilder()
          .update(ComerRejectedPropertyEntity)
          .set({ cause: `${existingObject.causa}, ${result.causa}` })
          .where(`no_bien = ${result.no_bien}`)
          .andWhere(`ID_EVENTO=${eventId}`)
          .execute();
        queryResult.updated = +affected;
      }
    }
    return queryResult;
  }

  async paRemittancePrepByGood(params: RemittancePrepByGoodDto) {
    const { eventId, goodNumber, cause, eventType } = params;
    const queryResult = {
      created: 0,
      createdErrors: 0,
      updated: 0,
      updatedErrors: 0,
    };
    // OBTEN ESTATUS Y DESCRIPCION DEL BIEN
    const query1 = await this.entityGoods
      .createQueryBuilder()
      .select([`estatus as "status"`, `descripcion as "description"`])
      .where(`no_bien = ${goodNumber}`)
      .getRawOne();

    // OBTEN EL MAXIMO EVENTO DONDE HAYA SIDO AGREGADO EL BIEN
    const query2 = await this.entityComerEvent
      .createQueryBuilder("ce")
      .select([`ce.ID_EVENTO as "eventId"`, `ce.ID_TPEVENTO as "tpEventId"`])
      .addFrom(ComerLotsEntity, "cl")
      .where(`ce.ID_EVENTO = cl.ID_EVENTO`)
      .andWhere(`ce.ID_TPEVENTO != 6`)
      .andWhere(
        `NOT EXISTS ( SELECT 1 FROM sera.COMER_PARAMETROSMOD cp
            WHERE cl.ID_ESTATUSVTA = cp.PARAMETRO   
              AND VALOR = 'TPCAN'  
              AND DIRECCION = ce.DIRECCION)`
      )
      .andWhere(
        `CL.ID_LOTE= ( SELECT MAX(ID_LOTE) FROM sera.COMER_BIENESXLOTE CB
        WHERE CB.NO_BIEN =  ${goodNumber})`
      )
      .getRawMany();

    const query3 = await this.entityComerRejected
      .query(`SELECT COUNT(1) as "goodRejected"
      FROM sera.COMER_BIENESRECHAZADOS
      WHERE NO_BIEN = ${goodNumber}
      AND ID_EVENTO = ${eventId}`);
    console.log(query1, query2, query3[0]);

    if (query2[0].tpEventId == 10) {
      // V_VAL_EVN_6 := F_VAL_EX10_6 (P_NOBIEN, 6);
      const valEvn6 = goodNumber;
      if (valEvn6 == 0) {
        const causeFinal = `-NO EXISTE EN UNA REMESA1`;
        const newId =
          (await this.entityComerRejected.query(
            `SELECT NEXTVAL('SEQ_COMER_BIENRECHAZADO')`
          )) ?? 1;
        if (query3[0].goodRejected == 0) {
          this.entityComerRejected.save({
            id: newId,
            eventId,
            goodNumber,
            origin: cause,
            causeFinal,
            description: query1[0].description,
            status: query1[0].status,
          });
          queryResult.created++;
        } else {
          const existingObject = await this.entityComerRejected
            .createQueryBuilder()
            .select([`causa`])
            .where(`no_bien = ${goodNumber}`)
            .andWhere(`ID_EVENTO = ${eventId}`)
            .getRawOne();

          const { affected } = await this.entityComerRejected
            .createQueryBuilder()
            .update(ComerRejectedPropertyEntity)
            .set({ cause: `${existingObject.causa}, ${causeFinal}` })
            .where(`no_bien = ${goodNumber}`)
            .andWhere(`ID_EVENTO = ${eventId}`)
            .execute();

          queryResult.updated = +affected;
        }
      }
    } else if (query2[0].tpEventId != 6 && query2[0].tpEventId == 10) {
      //  V_VAL_EVN_6 := F_VAL_EX10_6 (P_NOBIEN, 6);
      const valEvn6 = goodNumber;
      const sumValGood6 = valEvn6 == 0 ? 1 : 0;
      const cause = valEvn6 == 0 ? "- NO EXISTE EN UNA REMESA2" : "";
      // V_VAL_EVN_10 := F_VAL_EX10_6 (P_NOBIEN, 10);
      const valEvn10 = goodNumber;
      const sumValGood10 = valEvn10 == 0 ? 1 : 0;
      const cause2 =
        valEvn10 == 0 ? "- NO EXISTE EN UN EVENTO DE PREPARACION" : "";

      const sumValFinal = sumValGood6 + sumValGood10;
      const causeFinal = `${cause} ${cause2}`;

      if (sumValFinal >= 1 && query3[0].goodRejected == 0) {
        const newId =
          (await this.entityComerRejected.query(
            `SELECT NEXTVAL('SEQ_COMER_BIENRECHAZADO')`
          )) ?? 1;
        this.entityComerRejected.save({
          id: newId,
          eventId,
          goodNumber,
          origin: cause,
          causeFinal,
          description: query1[0].description,
          status: query1[0].status,
        });
        queryResult.created++;
      } else if (sumValFinal >= 1 && query3[0].goodRejected != 0) {
        const existingObject = await this.entityComerRejected
        .createQueryBuilder()
        .select([`causa`])
        .where(`no_bien = ${goodNumber}`)
        .andWhere(`ID_EVENTO = ${eventId}`)
        .getRawOne();

      const { affected } = await this.entityComerRejected
        .createQueryBuilder()
        .update(ComerRejectedPropertyEntity)
        .set({ cause: `${existingObject.causa}, ${causeFinal}` })
        .where(`no_bien = ${goodNumber}`)
        .andWhere(`ID_EVENTO = ${eventId}`)
        .execute();

      queryResult.updated = +affected;
      }
    }

    return queryResult;
  }

  async paChangeStatusValidate() {}
}
