import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { CatTransferentEntity } from "./entities/cat-transferent.entity";
import { RecordEntity } from "./entities/record.entity";
import { ParameterModEntity } from "./entities/comer-parameter-mod.entity";
import { CatLabelEntity } from "./entities/cat-label.entity";
import { ComerRejectedPropertyEntity } from "../comer-rejected-property/entities/comer-rejected-property.entity";
import { ActGoodLotMDto } from "./dto/act-good-lot-m.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";
import { GoodAtribMalEntity } from "./entities/good-atrib-mal.entity";

@Injectable()
export class PaProcessService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @InjectRepository(GoodsEntity)
    private entityGoods: Repository<ComerEventEntity>,
    @InjectRepository(ComerLotEntity)
    private entityComerLot: Repository<ComerLotEntity>,
    @InjectRepository(ComerRejectedPropertyEntity)
    private entityComerRejected: Repository<ComerRejectedPropertyEntity>,
    @InjectRepository(GoodAtribMalEntity)
    private entityGoodAtrib: Repository<GoodAtribMalEntity>,
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
        const newIdQr = await this.entityComerRejected.query(
          `SELECT NEXTVAL('sera.SEQ_COMER_BIENRECHAZADO') as val`
        );
        const newId = newIdQr[0].val;

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
      .addFrom(ComerLotEntity, "cl")
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
      const valEvn6 = await this.entityGoods.query(
        `sera.f_val_ex10_6(${goodNumber}, 6)`
      );
      //const valEvn6 = goodNumber;
      if (valEvn6 == 0) {
        const causeFinal = `-NO EXISTE EN UNA REMESA1`;
        const newId =
          (await this.entityComerRejected.query(
            `SELECT NEXTVAL('comer_bienesrechazados_seq')`
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
      const valEvn6 = await this.entityGoods.query(
        `sera.f_val_ex10_6(${goodNumber}, 6)`
      );
      // const valEvn6 = goodNumber;
      const sumValGood6 = valEvn6 == 0 ? 1 : 0;
      const cause = valEvn6 == 0 ? "- NO EXISTE EN UNA REMESA2" : "";
      const valEvn10 = await this.entityGoods.query(
        `sera.f_val_ex10_6(${goodNumber}, 10)`
      );
      //const valEvn10 = goodNumber;
      const sumValGood10 = valEvn10 == 0 ? 1 : 0;
      const cause2 =
        valEvn10 == 0 ? "- NO EXISTE EN UN EVENTO DE PREPARACION" : "";

      const sumValFinal = sumValGood6 + sumValGood10;
      const causeFinal = `${cause} ${cause2}`;

      if (sumValFinal >= 1 && query3[0].goodRejected == 0) {
        const newId =
          (await this.entityComerRejected.query(
            `SELECT NEXTVAL('comer_bienesrechazados_seq')`
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

  async paChangeStatusValidate(params: ChangeStatusValidateDto) {
    const { p1, p2, p3, p4, p5 } = params;

    const variables = {
      cause: null,
      withoutPhoto: "BIEN SIN FOTOS",
    };

    const returnMessages = [];

    const dictums = `
      SELECT DXB.NO_BIEN, BNS.NO_CLASIF_BIEN, CSB.NO_TIPO, CSB.NO_SUBTIPO, BNS.FEC_AVALUO_VIG, BNS.VALOR_AVALUO,
        BNS.VAL1,  BNS.VAL2,  BNS.VAL3,  BNS.VAL4,  BNS.VAL5,  BNS.VAL6,  BNS.VAL7,  BNS.VAL8,  BNS.VAL9,  BNS.VAL10,
        BNS.VAL11, BNS.VAL12, BNS.VAL13, BNS.VAL14, BNS.VAL15, BNS.VAL16, BNS.VAL17, BNS.VAL18, BNS.VAL19, BNS.VAL20,
        BNS.VAL21, BNS.VAL22, BNS.VAL23, BNS.VAL24, BNS.VAL25, BNS.VAL26, BNS.VAL27, BNS.VAL28, BNS.VAL29, BNS.VAL30,
        BNS.VAL31, BNS.VAL32, BNS.VAL33, BNS.VAL34, BNS.VAL35, BNS.VAL36, BNS.VAL37, BNS.VAL38, BNS.VAL39, BNS.VAL40,
        BNS.VAL41, BNS.VAL42, BNS.VAL43, BNS.VAL44, BNS.VAL45, BNS.VAL46, BNS.VAL47, BNS.VAL48, BNS.VAL49, BNS.VAL50
      FROM sera.DICTAMINACION_X_BIEN1 DXB, sera.BIENES BNS, sera.CAT_SSSUBTIPO_BIEN CSB
      WHERE DXB.NO_BIEN = BNS.NO_BIEN
        AND BNS.NO_CLASIF_BIEN = CSB.NO_CLASIF_BIEN
        AND DXB.NO_OF_DICTA = ${p2}
        AND DXB.TIPO_DICTAMINACION = '${p3}'
        AND CSB.NO_TIPO IN (5,6)
        AND NOT EXISTS (SELECT 1 FROM COMER.BIENES_TRANS_AVA WHERE NO_BIEN = BNS.NO_BIEN)
    `;

    const agreements = ` 
      SELECT AER.NO_BIEN, BNS.NO_CLASIF_BIEN, CSB.NO_TIPO, CSB.NO_SUBTIPO, BNS.FEC_AVALUO_VIG, BNS.VALOR_AVALUO,
        BNS.VAL1,  BNS.VAL2,  BNS.VAL3,  BNS.VAL4,  BNS.VAL5,  BNS.VAL6,  BNS.VAL7,  BNS.VAL8,  BNS.VAL9,  BNS.VAL10,
        BNS.VAL11, BNS.VAL12, BNS.VAL13, BNS.VAL14, BNS.VAL15, BNS.VAL16, BNS.VAL17, BNS.VAL18, BNS.VAL19, BNS.VAL20,
        BNS.VAL21, BNS.VAL22, BNS.VAL23, BNS.VAL24, BNS.VAL25, BNS.VAL26, BNS.VAL27, BNS.VAL28, BNS.VAL29, BNS.VAL30,
        BNS.VAL31, BNS.VAL32, BNS.VAL33, BNS.VAL34, BNS.VAL35, BNS.VAL36, BNS.VAL37, BNS.VAL38, BNS.VAL39, BNS.VAL40,
        BNS.VAL41, BNS.VAL42, BNS.VAL43, BNS.VAL44, BNS.VAL45, BNS.VAL46, BNS.VAL47, BNS.VAL48, BNS.VAL49, BNS.VAL50
      FROM sera.DETALLE_ACTA_ENT_RECEP AER, sera.BIENES BNS, sera.CAT_SSSUBTIPO_BIEN CSB
      WHERE AER.NO_BIEN = BNS.NO_BIEN
        AND BNS.NO_CLASIF_BIEN = CSB.NO_CLASIF_BIEN
        AND AER.NO_ACTA = ${p2}
        AND CSB.NO_TIPO IN (5,6)
        AND NOT EXISTS (SELECT 1 FROM COMER.BIENES_TRANS_AVA WHERE NO_BIEN = AER.NO_BIEN);
    `;

    const goods = `
      SELECT BNS.NO_BIEN, BNS.DESCRIPCION, BNS.ESTATUS, BNS.NO_CLASIF_BIEN, CSB.NO_TIPO, CSB.NO_SUBTIPO, BNS.FEC_AVALUO_VIG, BNS.VALOR_AVALUO,
        BNS.VAL1,  BNS.VAL2,  BNS.VAL3,  BNS.VAL4,  BNS.VAL5,  BNS.VAL6,  BNS.VAL7,  BNS.VAL8,  BNS.VAL9,  BNS.VAL10,
        BNS.VAL11, BNS.VAL12, BNS.VAL13, BNS.VAL14, BNS.VAL15, BNS.VAL16, BNS.VAL17, BNS.VAL18, BNS.VAL19, BNS.VAL20,
        BNS.VAL21, BNS.VAL22, BNS.VAL23, BNS.VAL24, BNS.VAL25, BNS.VAL26, BNS.VAL27, BNS.VAL28, BNS.VAL29, BNS.VAL30,
        BNS.VAL31, BNS.VAL32, BNS.VAL33, BNS.VAL34, BNS.VAL35, BNS.VAL36, BNS.VAL37, BNS.VAL38, BNS.VAL39, BNS.VAL40,
        BNS.VAL41, BNS.VAL42, BNS.VAL43, BNS.VAL44, BNS.VAL45, BNS.VAL46, BNS.VAL47, BNS.VAL48, BNS.VAL49, BNS.VAL50
      FROM sera.BIENES BNS, sera.CAT_SSSUBTIPO_BIEN CSB
      WHERE BNS.NO_CLASIF_BIEN = CSB.NO_CLASIF_BIEN
        AND BNS.NO_BIEN = ${p2}
        AND CSB.NO_TIPO IN (5,6)
        AND NOT EXISTS (SELECT 1 FROM COMER.BIENES_TRANS_AVA WHERE NO_BIEN = BNS.NO_BIEN);
    `;

    const getAttrib2 = async (goodClasificationNumber: number) => {
      return await this.entityGoods
        .query(`SELECT NO_COLUMNA, 'VAL'||NO_COLUMNA VAL_COLUMNA, DSATRIBUTO
          FROM sera.ATRIBUTOS_CLASIF_BIEN
          WHERE NO_CLASIF_BIEN = ${goodClasificationNumber}
            AND TIPO_ACT IN (1,2)
            AND REQUERIDO = 'S'
          ORDER BY NO_COLUMNA;`);
    };

    const getAttrib3 = async (goodClasificationNumber: number) => {
      return await this.entityGoods
        .query(`SELECT NO_COLUMNA, 'VAL'||NO_COLUMNA VAL_COLUMNA, DSATRIBUTO
        FROM sera.ATRIBUTOS_CLASIF_BIEN
        WHERE NO_CLASIF_BIEN = ${goodClasificationNumber}
          AND TIPO_ACT IN (1,2,3)
          AND REQUERIDO = 'S'
        ORDER BY NO_COLUMNA;`);
    };

    const dictumsCount = (
      goodClasificationNumber: number
    ) => `SELECT COUNT(1) as count
    FROM sera.ATRIBUTOS_CLASIF_BIEN
    WHERE sera.NO_CLASIF_BIEN = ${goodClasificationNumber}
      AND TIPO_ACT IN (1,2)
      AND REQUERIDO = 'S';`;

    const agreementsCount = (
      goodClasificationNumber: number
    ) => `SELECT COUNT(1) as count
    FROM sera.ATRIBUTOS_CLASIF_BIEN
    WHERE NO_CLASIF_BIEN = ${goodClasificationNumber}
      AND TIPO_ACT IN (1,2,3)
      AND REQUERIDO = 'S';`;

    const getPhotos = async (goodNumber: number) => {
      return await this.entityGoods.query(`SELECT NO_CONSEC, FEC_FOTO, UBICACION
        FROM sera.BIENES_FOTO FOT
        WHERE FOT.NO_BIEN = ${goodNumber};`);
    };

    const photosCount = (goodNumber: number) => `SELECT COUNT(1) count
      FROM sera.BIENES_FOTO
      WHERE NO_BIEN = ${goodNumber};`;

    const deleted = await this.entityGoodAtrib.delete({
      par1: p1,
      par2: p2,
    });

    returnMessages.push(deleted);

    const query =
      p1 == 2 ? dictums : p1 == 3 ? agreements : p1 == 4 ? goods : null;
    const elements = query ? await this.entityGoods.query(query) : [];
    console.log(query)
    for (const element of elements) {
      console.log(element)
      if (element.no_clasif_bien) {
        const countQuery =
          p1 == 2
            ? dictumsCount(element.no_clasif_bien)
            : p1 == 3 || p1 == 4
            ? agreementsCount(element.no_clasif_bien)
            : dictumsCount(element.no_clasif_bien);

        const check1 = await this.entityGoods.query(countQuery);
        console.log(check1[0].count)
        if (check1[0].count > 0) {
          const attribs =
            p1 == 2
              ? await getAttrib3(element.no_clasif_bien)
              : p1 == 3 || p1 == 4
              ? await getAttrib2(element.no_clasif_bien)
              : [];

          for (const attrib of attribs) {
            if (attrib.no_columna) {
              switch (attrib.no_columna) {
                case 1:
                  if (element.VAL1 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 2:
                  if (element.VAL2 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 3:
                  if (element.VAL3 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 4:
                  if (element.VAL4 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 5:
                  if (element.VAL5 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 6:
                  if (element.VAL6 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 7:
                  if (element.VAL7 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 8:
                  if (element.VAL8 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 9:
                  if (element.VAL9 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 10:
                  if (element.VAL10 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 11:
                  if (element.VAL11 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 12:
                  if (element.VAL12 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 13:
                  if (element.VAL13 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 14:
                  if (element.VAL14 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 15:
                  if (element.VAL15 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 16:
                  if (element.VAL16 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 17:
                  if (element.VAL17 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 18:
                  if (element.VAL18 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 19:
                  if (element.VAL19 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 20:
                  if (element.VAL20 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 21:
                  if (element.VAL21 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 22:
                  if (element.VAL22 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 23:
                  if (element.VAL23 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 24:
                  if (element.VAL24 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 25:
                  if (element.VAL25 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 26:
                  if (element.VAL26 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 27:
                  if (element.VAL27 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 28:
                  if (element.VAL28 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 29:
                  if (element.VAL29 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 30:
                  if (element.VAL30 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 31:
                  if (element.VAL31 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 32:
                  if (element.VAL32 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 33:
                  if (element.VAL33 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 34:
                  if (element.VAL34 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 35:
                  if (element.VAL35 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 36:
                  if (element.VAL36 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 37:
                  if (element.VAL37 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 38:
                  if (element.VAL38 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 39:
                  if (element.VAL39 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 40:
                  if (element.VAL40 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 41:
                  if (element.VAL41 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 42:
                  if (element.VAL42 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 43:
                  if (element.VAL43 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 44:
                  if (element.VAL44 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 45:
                  if (element.VAL45 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 46:
                  if (element.VAL46 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 47:
                  if (element.VAL47 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 48:
                  if (element.VAL48 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 49:
                  if (element.VAL49 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                case 50:
                  if (element.VAL50 != null) {
                    variables.cause =
                      variables.cause == null
                        ? attrib.DSATRIBUTO
                        : `${variables.cause}/${attrib.DSATRIBUTO}`;
                  }
                  break;
                default:
                  break;
              }
            } else {
              returnMessages.push(
                `NO SE ENCONTRARON DATOS DE CLASIFICADOR ${element.no_bien}`
              );
            }
          }

          // VALIDAR FECHA AVALUO PARA INMUEBLES
          if (
            (element.no_tipo =
              6 && element.no_subtipo == 1 && element.val14 == "S")
          ) {
            if (!element.fec_avaluo_vig) {
              element.fec_avaluo_vig_nulo = "FEC_AVALUO_VIG";
              variables.cause = !variables.cause
                ? element.fec_avaluo_vig_nulo
                : `${variables.cause}/${element.fec_avaluo_vig_nulo}`;
            }
          }

          // VALIDAR VALOR AVALUO PARA INMUEBLES
          if (
            (element.no_tipo =
              6 && element.no_subtipo == 1 && element.val14 == "S")
          ) {
            if (!element.valor_avaluo) {
              element.fec_avaluo_vig_nulo = "VALOR_AVALUO";
              variables.cause = !variables.cause
                ? element.valor_avaluo_nulo
                : `${variables.cause}/${element.valor_avaluo_nulo}`;
            }
          }

          if (p1 == 3 || p1 == 4) {
            const goodPhotoCta = await this.entityGoods.query(
              photosCount(element.NO_BIEN)
            );

            if (goodPhotoCta[0].count == 0) {
              variables.cause = !variables.cause
                ? variables.withoutPhoto
                : `${variables.cause}/${variables.withoutPhoto}`;
            } else {
              const photos = await getPhotos(element.NO_BIEN);

              for (const photo of photos) {
                if (!photo.fec_foto) {
                  const nullPhoto = `'EL CAMPO FEC_FOTO DE LA TABLA BIENES_FOTO ESTA NULO EN EL CONSECUTIVO ${photo.NO_CONSEC}`;
                  variables.cause = !variables.cause
                    ? nullPhoto
                    : `${variables.cause}/${nullPhoto}`;
                }

                if (!photo.ubicacion) {
                  const nullUbication = `'EL CAMPO UBICACION DE LA TABLA BIENES_FOTO ESTA NULO EN EL CONSECUTIVO  ${photo.NO_CONSEC}`;
                  variables.cause = !variables.cause
                    ? nullUbication
                    : `${variables.cause}/${nullUbication}`;
                }
              }
            }
          }

          if (variables.cause) {
            const newId =
              p1 == 2 || p1 == 3
                ? element.no_bien
                : await this.entityComerRejected.query(
                    `SELECT NEXTVAL('sera.SEQ_COMER_BIENRECHAZADO') as val`
                  );
            const newGoodAtrib =
              p1 == 2 || p1 == 3
                ? await this.entityGoodAtrib.save({
                    id: newId,
                    reason: variables.cause,
                    par1: p1,
                    par2: p2,
                  })
                : await this.entityComerRejected.save({
                    id: newId[0].val,
                    eventId: p4,
                    propertyNumber: element.no_bien,
                    origin: p3,
                    description: element.descripcion,
                    status: element.estatus,
                    cause: variables.cause,
                  });
            returnMessages.push(newGoodAtrib);
          }

          variables.cause = "";
        } else {
          if (p1 == 3 || p1 == 4) {
            if (p1 == 4) {
              
              // VALIDAR FECHA AVALUO PARA INMUEBLES
              if (
                (element.no_tipo =
                  6 && element.no_subtipo == 1 && element.val14 == "S")
              ) {
                if (!element.fec_avaluo_vig) {
                  element.fec_avaluo_vig_nulo = "FEC_AVALUO_VIG";
                  variables.cause = !variables.cause
                    ? element.fec_avaluo_vig_nulo
                    : `${variables.cause}/${element.fec_avaluo_vig_nulo}`;
                }
              }

              // VALIDAR VALOR AVALUO PARA INMUEBLES
              if (
                (element.no_tipo =
                  6 && element.no_subtipo == 1 && element.val14 == "S")
              ) {
                if (!element.valor_avaluo) {
                  element.fec_avaluo_vig_nulo = "VALOR_AVALUO";
                  variables.cause = !variables.cause
                    ? element.valor_avaluo_nulo
                    : `${variables.cause}/${element.valor_avaluo_nulo}`;
                }
              }
            }

            const goodPhotoCta = await this.entityGoods.query(
              photosCount(element.no_bien)
            );
            
            if (goodPhotoCta[0].count == 0) {
              variables.cause = !variables.cause
                ? variables.withoutPhoto
                : `${variables.cause}/${variables.withoutPhoto}`;
            } else {
              
              const photos = await getPhotos(element.no_bien);

              for (const photo of photos) {
                if (!photo.fec_foto) {
                  const nullPhoto = `'EL CAMPO FEC_FOTO DE LA TABLA BIENES_FOTO ESTA NULO EN EL CONSECUTIVO ${photo.no_consec}`;
                  variables.cause = !variables.cause
                    ? nullPhoto
                    : `${variables.cause}/${nullPhoto}`;
                }

                if (!photo.ubicacion) {
                  const nullUbication = `'EL CAMPO UBICACION DE LA TABLA BIENES_FOTO ESTA NULO EN EL CONSECUTIVO  ${photo.NO_CONSEC}`;
                  variables.cause = !variables.cause
                    ? nullUbication
                    : `${variables.cause}/${nullUbication}`;
                }
              }
            }
            
            if (variables.cause) {
              const newId =
                p1 == 3
                  ? element.no_bien
                  : await this.entityComerRejected.query(
                      `SELECT NEXTVAL('sera.SEQ_COMER_BIENRECHAZADO') as val`
                    );
              const newGoodAtrib =
                p1 == 3
                  ? await this.entityGoodAtrib.save({
                      id: newId,
                      reason: variables.cause,
                      par1: p1,
                      par2: p2,
                    })
                  : await this.entityComerRejected.save({
                      id: newId[0].val,
                      eventId: p4,
                      propertyNumber: element.no_bien,
                      origin: p3,
                      description: element.descripcion,
                      status: element.estatus,
                      cause: variables.cause,
                    });
              returnMessages.push(newGoodAtrib);
            }
          }
        }
      }
    }

    return returnMessages;
  }
}
