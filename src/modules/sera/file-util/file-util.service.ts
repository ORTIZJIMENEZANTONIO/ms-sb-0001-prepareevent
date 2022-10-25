import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { FilesEntity } from "./entities/files.entity";
import { CatTransferentEntity } from "./entities/cat-transferent.entity";
import { WarehouseEntity } from "./entities/cat-warehouse.entity";
import { LabelEntity } from "./entities/cat-label.entity";
import { Reference } from "src/shared/functions/reference";
import { UpdateComerBatchDto } from "../comer-batch/dto/update-comer-batch.dto";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
import { File } from "src/shared/functions/excel";
import { UpdateComerGoodsXLotDto } from "../comer-property-by-batch/dto/update-comer-property-by-batch.dto";

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

    return data.length > 0 ? File.makeFile(data, fileName) : null;
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
    return params[0]?.valor ? 1 + params[0].valor / 100 : 1.15;
  }

  async createThirdBaseFile(
    fileName: string,
    eventNumber: number,
    bankName: string
  ) {
    const queryForniture = await this.entityComerEvent.query(`
      SELECT 
        lot.referenciag, 
        lot.referencial,
        cat.cvman, lot.lote_publico base,
        lot.descripcion, 
        cat.clave,
        eve.cve_proceso,  clie.nom_razon,
        clie.rfc, clie.curp, clie.calle,
        clie.colonia, clie.delegacion,
        clie.estado, clie.cp, 
        clie.telefono, 
        clie.correoweb,
        clie.esta_id cve_estado
      FROM 
        sera.comer_eventos eve,
        sera.cat_transferente cat,
        sera.comer_clientes clie
        left join sera.comer_lotes lot on lot.id_cliente = clie.id_cliente
      WHERE eve.id_evento = ${eventNumber}
      AND eve.id_evento = lot.id_evento
      AND lot.lote_publico > 0
      AND cat.no_transferente = 541;`);

    const queryFornitureRef = await this.entityComerEvent.query(`
      SELECT 
        lot.referenciag as loRefg,            
        lot.referencial as loRefl,
        coalesce(cat.cvman,'000000') as loCvman,    
        lot.id_estatusvta as loStatus,
        lot.id_lote as loLot
      FROM
        sera.comer_eventos eve,
        sera.comer_lotes lot,
        sera.cat_transferente cat
      WHERE eve.id_evento = ${eventNumber}
      AND eve.id_evento = lot.id_evento
      AND lot.lote_publico > 0
      AND cat.no_transferente = 541;
    `);

    queryFornitureRef.map((el, index) => {
      if (el.loStatus == "PREP") {
        if (el.loRefg == null || el.loRefg == "") {
          el.loRefg = Reference.calculateReference(
            bankName,
            el.loLot,
            el.loCvman,
            "G"
          );
        }
        if (el.loRefl == null || el.loRefl == "") {
          el.loRefl = Reference.calculateReference(
            bankName,
            el.loLot,
            el.loCvman,
            "L"
          );
        }

        this.updateComerLot({
          lotIdToUpdt: el.loLot,
          referenceG: el.loRefg,
          referential: el.loRefl,
        });
      }
    });
    return queryForniture.length > 0
      ? File.makeFile(queryForniture, fileName)
      : null;
  }

  async calculateGoodPrice(params: { eventId: number; lotId: number }) {
    const { eventId, lotId } = params;
    const bie = {
      value: 0,
      total: 0,
      pct: 0,
      vat: 0,
      acum: 0,
      residue: 0,
    };

    const lots1 = await this.getLots(eventId, lotId);

    const vat = await this.getGlobalParams();
    const idTPevent = await this.getIdTpEvent(eventId);
    const nIdTPevent = idTPevent ? idTPevent : 1;
    const G_IVA = nIdTPevent == 5 ? 1 : vat;

    const rowsUpdated = [];
    for (const [index, lot] of lots1.entries()) {
      let cont = 0;
      bie.value = 0;
      bie.acum = 0;
      bie.total = 0;
      bie.pct = lot.LOT_FINAL / lot.LOT_VB || 1;
      const goods = await this.getGoods(lot.lot_idlote);

      if (goods.length > 0) {
        for (const good of goods) {
          cont++;
          bie.acum = 0;
          bie.total = 0;

          if (cont <= lot.LOT_NUMB) {
            bie.value = bie.pct * good.BIE_PRECIO;
            if (lot.LOT_IVA > 0) {
              bie.vat = bie.value - bie.value / G_IVA;
              bie.value = bie.value - bie.vat;
              bie.total = bie.value + bie.vat;
            } else {
              bie.vat = 0;
            }

            bie.acum = +bie.total;
          }

          if (cont == lot.LOT_NUMB) {
            if (bie.acum != lot.LOT_FINAL) {
              bie.residue = lot.LOT_FINAL + bie.acum;
              if (lot.LOT_IVA > 0) {
                bie.value = bie.value + bie.vat + bie.residue;
                bie.vat = bie.value - bie.value / G_IVA;
                bie.value = bie.value - bie.vat;
                bie.total = bie.value + bie.vat;
              } else {
                bie.value = +bie.residue;
              }
            }
          }

          const body: UpdateComerGoodsXLotDto = {
            lotIdToUpdt: lot.lot_idlot,
            goodIdToUpdt: good.BIE_BIEN, 
            finalPrice: bie.total,
            priceWithoutVat: bie.value,
            baseValue:  good.BIE_PRECIO
          };
          rowsUpdated.push(await this.updateComerLot(body));
        }
      }
    }
    //console.log(rowsUpdated);
    return rowsUpdated.length > 0
      ? { message: `Updated successfully ${rowsUpdated.length} rows `}
      : null;
  }

  async getLots(eventId: number, lotId: number) {
    return await this.entityComerLot
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
      .orderBy("LOTE_PUBLICO")
      .getRawMany();
  }

  getGoods(idLot: number) {
    const queryGood1 = this.entityGoodXLot
      .createQueryBuilder("bxl")
      .select([
        "id_bienxlote as BIE_BIEN",
        "coalesce(VALOR_BASE, 0.01) as BIE_PRECIO",
        "NO_BIEN as BIE_NOBIEN",
      ])
      .where(`ID_LOTE = ${idLot}`)
      .andWhere("coalesce(VALOR_BASE,0) >= 0")
      .orderBy("NO_BIEN")
      .getRawMany();
    return queryGood1;
  }

  async getIdTpEvent(eventId: number) {
    const idTpEvent = await this.entityComerEvent
      .createQueryBuilder("ce")
      .select(["ce.ID_TPEVENTO as tpEventId"])
      .where(`ce.ID_EVENTO  = ${eventId}`)
      .getRawOne();

    return idTpEvent ?? 0;
  }

  async updateComerLot(comer: UpdateComerBatchDto) {
    const data = await this.entityComerLot.findOne({
      where: { id: comer.lotIdToUpdt },
    });

    if (data) {
      delete comer.id;
      delete comer.lotIdToUpdt;
      this.entityComerLot.merge(data, comer);
      return this.entityComerLot.save(data);
    }

    return false;
  }

  async updateComerPropertyByLot(comer: UpdateComerGoodsXLotDto) {
    const data = await this.entityGoodXLot.findOne({
      where: { lotId: comer.lotIdToUpdt, propertyByLotId: comer.goodIdToUpdt },
    });

    if (data) {
      delete comer.lotId;
      delete comer.goodNumber;
      delete comer.lotIdToUpdt;
      delete comer.goodIdToUpdt;
      this.entityGoodXLot.merge(data, comer);
      return this.entityGoodXLot.save(data);
    }

    return false;
  }
}
