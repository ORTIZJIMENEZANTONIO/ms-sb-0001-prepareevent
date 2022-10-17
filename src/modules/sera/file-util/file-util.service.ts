import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import * as xlsx from "xlsx";
import * as fs from "fs";

import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { FilesEntity } from "./entities/files.entity";
import { CatTransferentEntity } from "./entities/cat-transferent.entity";
import { WarehouseEntity } from "./entities/cat-warehouse.entity";
import { LabelEntity } from "./entities/cat-label.entity";
@Injectable()
export class FileUtilService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entityGoodXLot: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(ComerLotsEntity)
    private entityComerLot: Repository<ComerLotsEntity>,
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("file_util_served") public counter: Counter<string>
  ) {}

  private path = "src/files/";

  async makeFile(data, fileName: string) {
    const workSheet = xlsx.utils.json_to_sheet(data);
    const workBook = xlsx.utils.book_new();
    const name = `${this.path}${fileName ?? new Date().getTime()}.xlsx`;
    xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel");
    await xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    await xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    await xlsx.writeFile(workBook, name);
    const f = fs.readFileSync(name, { encoding: "base64" });
    //fs.unlink(name, err => err)
    return {
      data,
      file: {
        name,
        base64: data.length > 0 ? f : "",
      },
    };
  }

  async createThirdFileTemp(fileName: string, eventNumber: number) {
    const clasification = await this.entityGoodXLot.query(`
      SELECT 
        TAL.NO_TIPOBIEN_ALTERNO, 
        CTA.NO_CLASIFICACION_ALTERNA, 
        CTA.NO_CLASIF_BIEN
      FROM 
        sera.CLASIF_EN_TIPOBIEN_ALTERNO CTA, 
        sera.TIPOBIEN_ALTERNO TAL
      WHERE CTA.NO_CLASIFICACION_ALTERNA    = TAL.NO_CLASIFICACION_ALTERNA
        AND CTA.NO_CLASIFICACION_ALTERNA = 4
        AND CTA.NO_TIPOBIEN_ALTERNO         = TAL.NO_TIPOBIEN_ALTERNO
    `); // AND CTA.NO_CLASIFICACION_ALTERNA(+) = 4
    console.log(clasification);

    const queryBuilder = this.entityGoodXLot.createQueryBuilder("bxl").select([
      "coalesce(cat.cvman,'0') as cvman",
      "lot.publicLot as publicLot",
      "bxl.goodsId as goodsId",
      "coalesce(bxl.quantity, bie.quantity) as quantity",
      "coalesce(bxl.camp1, bie.description) as description", // DESCRIPCIÓN
      "coalesce(bxl.camp2, lot.description) as genericDescription", //  DESC GENERICA
      "bxl.camp3 as type", // TIPO
      "bxl.camp4 as brand", // MARCA
      "bxl.camp5 as subBrand", // SUBMARCA
      "bxl.camp6 as model", // MODELO
      "bxl.camp7 as noSerte", // NOSERIE
      "bxl.camp8 as noMotor", // NOMOTOR
      "bxl.camp9 as noCabin", // NODECABINA
      "coalesce(alm.description,'DESCONOCIDA') as UBICA",
      "bie.status as status",
      //"DECODE(CA.NO_TIPOBIEN_ALTERNO,5,'VEHICULO',4,'VEHICULO',3,'VEHICULO',7,'INMUEBLE','MERCANCIA') as TIPOBIEN_ALTERNO",
      //"CASE WHEN (LOT.ID_ESTATUSVTA = 'PAG' OR LOT.ID_ESTATUSVTA = 'PAGE') THEN 'S' ELSE 'N' END as VENDIDO",
      "bxl.consignmentEventId as consignment",
      "lot.publicLot as LOTEREM",
      "TO_CHAR(bxl.creationDate,'DD/MM/YYYY') as date",
      "bie.unit as unit",
      "CASE WHEN (LOT.ID_ESTATUSVTA = 'PAG' OR LOT.ID_ESTATUSVTA = 'PAGE') THEN 'S' ELSE 'N' END as VENDIDO",
      "exp.transferringId as NO_TRANSFERENTE",
      "cat.keyCode as CLAVE",
      "erm.processCve as PROCESO",
      "g.description as DESCRIPCION",

      "bie.goodsClassId as goodsClassId",
    ]);
    queryBuilder.addFrom(GoodsEntity, "bie");
    queryBuilder.addFrom(ComerLotsEntity, "lot");
    queryBuilder.addFrom(ComerEventEntity, "erm");
    queryBuilder.addFrom(FilesEntity, "exp");
    queryBuilder.addFrom(CatTransferentEntity, "cat");
    // queryBuilder.addFrom(WarehouseEntity, "alm");
    //     AND ALM.NO_ALMACEN(+)               = BIE.NO_ALMACEN
    queryBuilder.addFrom(LabelEntity, "g");
    //queryBuilder.addFrom(`
    //  SELECT
    //    TAL.NO_TIPOBIEN_ALTERNO,
    //    CTA.NO_CLASIFICACION_ALTERNA,
    //    CTA.NO_CLASIF_BIEN
    //  FROM
    //    sera.CLASIF_EN_TIPOBIEN_ALTERNO CTA,
    //    sera.TIPOBIEN_ALTERNO TAL
    //  WHERE CTA.NO_CLASIFICACION_ALTERNA = TAL.NO_CLASIFICACION_ALTERNA
    //    AND CTA.NO_CLASIFICACION_ALTERNA = 4
    //    AND CTA.NO_TIPOBIEN_ALTERNO      = TAL.NO_TIPOBIEN_ALTERNO`, "CA")
    //queryBuilder.setParameters(userQb.getParameters())
    //queryBuilder.andWhere("bxl is not null");
    queryBuilder.andWhere("lot.eventId = erm.eventId");
    queryBuilder.andWhere("bxl.lotId = lot.lotId");
    queryBuilder.where("bxl.goodsId = bie.goodsID");
    queryBuilder.andWhere("bie.fileId = exp.filesId");
    queryBuilder.andWhere("lot.publicLot > 0");
    //queryBuilder.leftJoin(WarehouseEntity, "alm", "alm.idWarehouse = bxl.storeNo")

    //queryBuilder.andWhere("erm.ID_EVENTO = :eventNumber", {eventNumber})
    queryBuilder.take(10);
    console.log(queryBuilder.getQuery());
    return await queryBuilder.getRawMany();
  }

  async createThirdFile(fileName: string, eventNumber: number) {
    const query = this.entityGoodXLot.query(`
      SELECT
        coalesce(cat.cvman,'0') as cvman,
        LOT.LOTE_PUBLICO, 
        BXL.NO_BIEN, 
        coalesce(BXL.CANTIDAD, BIE.CANTIDAD) as CANTIDAD,
        coalesce(BXL.CAMPO1, BIE.DESCRIPCION) as DESCRIPCION,
        coalesce(BXL.CAMPO2, LOT.DESCRIPCION) as DESC_GENERICA, 
        BXL.CAMPO3, -- TIPO
        BXL.CAMPO4, -- MARCA
        BXL.CAMPO5, -- SUBMARCA
        BXL.CAMPO6, -- MODELO
        BXL.CAMPO7, -- NOSERIE
        BXL.CAMPO8, -- NOMOTOR
        BXL.CAMPO9, -- NODECABINA
        coalesce(ALM.DESCRIPCION,'DESCONOCIDA') as UBICA,
        BIE.ESTATUS,
        CASE WHEN CA.NO_TIPOBIEN_ALTERNO IN (5, 4, 3)  THEN 'VEHICULO' WHEN CA.NO_TIPOBIEN_ALTERNO = 7 THEN 'INMUEBLE'  else 'MERCANCIA' end as TIPOBIEN_ALTERNO,
        DRM.DESCRIPCION DELEGACAP,
        BXL.ID_EVENTO_REMESA REMESA,
        LOT.LOTE_PUBLICO LOTEREM,
        TO_CHAR(BXL.FECHA_CREACION,'DD/MM/YYYY') FECHA,
        BIE.UNIDAD,
        TO_CHAR(BXL.FECHA_CREACION,'DD/MM/YYYY') FECHA2,
        CASE WHEN (LOT.ID_ESTATUSVTA = 'PAG' OR LOT.ID_ESTATUSVTA = 'PAGE') THEN 'S' ELSE 'N' END as VENDIDO,
        EXP.NO_TRANSFERENTE,
        CAT.CLAVE,
        ERM.CVE_PROCESO,
        G.DESCRIPCION,
        DESC_SUBTIPO,
        DESC_SSUBTIPO,
        DESC_SSSUBTIPO,
        BIE.NO_CLASIF_BIEN                  
      FROM 
        sera.COMER_LOTES LOT, 
        sera.COMER_BIENESXLOTE BXL, 
        sera.EXPEDIENTES exp
        left outer join sera.CAT_TRANSFERENTE CAT on EXP.NO_TRANSFERENTE = CAT.NO_TRANSFERENTE, 
        sera.CAT_ALMACENES ALM
        right outer join sera.BIENES BIE on ALM.NO_ALMACEN = BIE.NO_ALMACEN,
        sera.CAT_DELEGACIONES DRM
        left outer join sera.COMER_EVENTOS ERM on ERM.NO_DELEGACION = DRM.NO_DELEGACION,
        sera.CAT_ETIQUETA_BIEN G,
        sera.V_TIPO_BIEN D, 
        ( SELECT 
            TAL.NO_TIPOBIEN_ALTERNO, 
            CTA.NO_CLASIFICACION_ALTERNA, 
            CTA.NO_CLASIF_BIEN
          FROM 
            sera.CLASIF_EN_TIPOBIEN_ALTERNO CTA,
            sera.TIPOBIEN_ALTERNO TAL
          WHERE CTA.NO_CLASIFICACION_ALTERNA = TAL.NO_CLASIFICACION_ALTERNA
             AND CTA.NO_CLASIFICACION_ALTERNA = 4
            AND CTA.NO_TIPOBIEN_ALTERNO      = TAL.NO_TIPOBIEN_ALTERNO
        ) CA
        right outer join sera.BIENES BIENES on CA.NO_CLASIF_BIEN = BIENES.NO_CLASIF_BIEN
      WHERE BIE.NO_CLASIF_BIEN          = D.NO_CLASIF_BIEN
        AND BIE.NO_ETIQUETA             = G.NO_ETIQUETA
        and LOT.ID_EVENTO               = ERM.ID_EVENTO
        AND BXL.ID_LOTE                 = LOT.ID_LOTE
        AND BIE.NO_BIEN                 = BXL.NO_BIEN
        AND BIE.NO_EXPEDIENTE           = EXP.NO_EXPEDIENTE
        and ERM.ID_EVENTO               = ${eventNumber}
        AND LOT.LOTE_PUBLICO            > 0
        AND ERM.ID_EVENTO               = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
        AND LOT.ID_EVENTO               = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
        AND LOT.ID_LOTE                 = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','L')
        AND DRM.ETAPA_EDO               = sera.FA_ETAPACREDA(BXL.FECHA_CREACION)
    `);
    const data = await query;
    console.log("data", data);
    return this.makeFile(data, fileName);
  }

  async getGlobalParams() {
    const query = this.entityComerLot.query(`
    SELECT
      VALOR
    FROM
      sera.COMER_PARAMETROSMOD PAR
    WHERE
      PAR.PARAMETRO = 'IVA'
      AND PAR.DIRECCION = 'C'
    `);
    const params = await query;
    const num = 1 + params[0].valor / 100;
    return num ?? 1.15;
  }

  async calculateGoodPrice(params: { eventId: number; lotId: number }) {
    const { eventId, lotId } = params;
    const queryLots1 = this.entityComerLot
      .createQueryBuilder("lot")
      .select([
        //"id_evento",
        //"lote_publico",
        "ID_LOTE as LOT_IDLOTE",
        "PRECIO_FINAL - IVA_LOTE as LOT_PRECIO",
        "coalesce(IVA_LOTE,0) as LOT_IVA",
        "VALOR_BASE as LOT_VB",
        "NUM_BIENES as LOT_NUMB",
        "PRECIO_FINAL as LOT_FINAL",
      ])
      .where(`ID_EVENTO = ${eventId}`)
      .andWhere(`LOTE_PUBLICO = coalesce(${lotId}, LOTE_PUBLICO)`)
      .orderBy("LOTE_PUBLICO");
    const lots1 = await queryLots1.getRawMany();

    const queryTpEvent = await this.entityComerEvent
      .createQueryBuilder()
      .select("ID_TPEVENTO", "tpEventId")
      .where(`ID_EVENTO  = ${eventId}`)
      .getRawOne();

    const n_ID_TPEVENT = queryTpEvent.tpEventId ?? 1;
    const vat = await this.getGlobalParams();
    const G_IVA = n_ID_TPEVENT == 5 ? 1 : vat;
    //const BIE_PCT = ROUND(lots1.LOT_FINAL / lots1.LOT_VB, 6);
    const BIE_PCT = lots1[0].LOT_FINAL / lots1[0].LOT_VB || 1;

    const queryGood1 = this.entityGoodXLot
      .createQueryBuilder("bxl")
      .select([
        "id_bienxlote as BIE_BIEN",
        "coalesce(VALOR_BASE, 0.01) as BIE_PRECIO",
        "NO_BIEN as BIE_NOBIEN",
      ])
      .where(`ID_LOTE = :lot`, { lot: lots1[0].lot_idlote })
      .andWhere("coalesce(VALOR_BASE,0) >= 0")
      .orderBy("NO_BIEN");

    const goods1 = await queryGood1.getRawMany();

    console.log(lots1, goods1, G_IVA, n_ID_TPEVENT, BIE_PCT);
    return {};
  }
}
