import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";

@Injectable()
export class PartialPropertyDeliveredService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entity: Repository<ComerGoodsXLotEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("partial_property_delivered_served")
    public counter: Counter<string>
  ) {}

  /**************************************************************
    INSERTAR EL BIEN QUE SE PARCIALIZO Y SE ENTREGO EN EL LOTE
  ***************************************************************/
  async createNewPartialGood({
    lotId,
    goodNumber,
    ldevcant,
    previosGood,
  }: PartialPropertyDelivered) {
    const globalVat = 0.15; // G_IVA
    const restBody = await this.getLotValues(
      lotId,
      ldevcant,
      globalVat,
      previosGood
    );
    const lotInbBxlId = await this.getLastId(lotId);

    if (!restBody || !lotInbBxlId) {
      return null;
    }

    const values = {
      ...restBody,
      propertyByLotId: lotInbBxlId.max,
      goodNumber,
      lotId,
    };

    try {
      return await this.entity.save(values);
    } catch (error) {
      return {
        statusCode: 506,
        message: error.detail ?? "Wrong parameters to insert"
      }
    }
    
  }

  async getLastId(lotId: number) {
    return await this.entity
      .createQueryBuilder("bxl")
      .select([`MAX(bxl.ID_BIENXLOTE) + 1 as max`])
      .where(`bxl.ID_LOTE = ${lotId}`)
      .getRawOne();
  }

  async getLotValues(
    lotId: number,
    ldevcant: number,
    globalVat: number,
    previosGood: number
  ) {
    const lot = this.entity
      .createQueryBuilder()
      .select([
        `( (valor_base/cantidad)*${ldevcant} ) AS "baseValue"`,
        `PRECIO_AVALUO_REF as "appraisalPriceRef"`,
        `( (PRECIO_FINAL / CANTIDAD)*${ldevcant} ) as "finalPrice"`,
        `IVA_BASE as "baseVat"`,
        `( (PRECIO_FINAL / CANTIDAD)*${ldevcant} - ROUND( ( (PRECIO_FINAL / CANTIDAD)*${ldevcant}) / ${globalVat}, 2 ) ) as "finalVat"`,
        `CAMPO1 as "camp1"`,
        `CAMPO2 as "camp2"`,
        `CAMPO3 as "camp3"`,
        `CAMPO4 as "camp4"`,
        `CAMPO5 as "camp5"`,
        `CVE_PERITAJE_JUR as "surveyJurKey"`,
        `NO_ALMACEN as "storeNumber"`,
        `${ldevcant} as "quantity"`,
        `PORC_IVA as "vatPercent"`,
        `NO_INVENTARIO as "inventoryNumber"`,
        `CAMPO6 as "camp6"`,
        `ROUND( ( (PRECIO_FINAL / CANTIDAD)*${ldevcant} ) / ${globalVat}, 2 ) as "priceWithoutVat"`,
        `( (MONTO_NOAPP_IVA / CANTIDAD)*${ldevcant} ) as "amountNoAppVat"`,
        `ESTATUS_ANT as "previousStatus"`,
        `CAMPO8 as "camp8"`,
        `CAMPO9 as "camp9"`,
        `EMPRESA_VALUADORA as "appraiserCompany"`,
        `FECHA_AVALUO as "appraiserDate"`,
        `( (MONTO_APP_IVA / CANTIDAD)*${ldevcant} ) as "amountAppVat"`,
        `ID_EVENTO_COMER as "comerEventId"`,
        `PRECIO_GARANTIA as "warrantyPrice"`,
        `CAMPO7 as "camp7"`,
        `ESTATUS_COMER as "status"`,
        `NO_TRANSFERENTE as "transferenceNumber"`,
        `current_date as "creationDate"`,
        `ID_LOTE_COMER as "comerLotId"`,
        `ID_EVENTO_REMESA as "consignmentEventId"`,
        `ID_LOTE_REMESA as "consignmentLotId"`,
        `ANTICIPO as "advance"`,
        `PCTSLOTE as "lotPcts"`,
        `VENDIDO as "sold"`,
        `OBSERVACIONES as "observation"`,
        `FECHA_FACTURA as "billDate"`,
        `ID_BIENXLOTE_REMESA as "consignmentGoodsId"`,
        `NO_FACTURA as "billNumber"`,
        `ANEXO as "annex"`,
        `SELECCIONADO as "selected"`,
        `NO_CILINDROS as "cylindersNumber"`,
        `PROCEDENCIA as "origin"`,
        `PAIS_PROCEDENCIA as "originCountry"`,
        `DESCRIPCION_LOTE as "lotDescription"`,
      ])
      .where(`ID_LOTE = ${lotId}`)
      .andWhere(`NO_BIEN = ${previosGood}`);
    return await lot.getRawOne();
  }
}
