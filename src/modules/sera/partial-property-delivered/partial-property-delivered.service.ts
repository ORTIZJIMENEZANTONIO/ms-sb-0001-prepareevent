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
    const globalVat = 0.15;
    const locInbBxlId = this.getLastId(lotId);
    const values = {
      propertyByLotId: locInbBxlId,
      goodNumber,
      lotId,
      ...this.getLotValues(lotId, ldevcant, globalVat, previosGood),
    };

    console.log(values);

    return {};
    //return await this.entity.save(values)
  }

  async getLastId(lotId: number) {
    return await this.entity
      .createQueryBuilder()
      .select([`MAX(BXL.ID_BIENXLOTE) + 1`])
      .where(`BXL.ID_LOTE = ${lotId}`)
      .getRawOne();
  }

  async getLotValues(
    lotId: number,
    ldevcant: number,
    globalVat: number,
    previosGood: number
  ) {
    return await this.entity
      .createQueryBuilder()
      .select([
        `((baseValue/quantity)*${ldevcant}) AS baseValue`,
        `appraisalPriceRef`,
        `((finalPrice/quantity)*${ldevcant}) as finalPrice`,
        `baseVat`,
        `( (finalPrice/quantity)*${ldevcant} - ROUND( ( (finalPrice/quantity)*${ldevcant}) / ${globalVat}, 2 ) ) as finalVat`,
        `camp1`,
        `camp2`,
        `camp3`,
        `camp4`,
        `camp5`,
        `surveyJurKey`,
        `storeNumber`,
        `${ldevcant} as quantity`,
        `vatPercent`,
        `inventoryNumber`,
        `camp6`,
        `ROUND( ( (finalPrice/quantity)*${ldevcant} ) / ${globalVat}, 2 ) as priceWithoutVat`,
        `( (amountNoAppVat/quantity)*${ldevcant} ) as amountNoAppVat`,
        `previousStatus`,
        `camp8`,
        `camp9`,
        `appraiserCompany`,
        `appraiserDate`,
        `( (amountAppVat/quantity)*${ldevcant} ) as amountAppVat`,
        `comerEventId`,
        `warrantyPrice`,
        `camp7`,
        `status`,
        `transferenceNumber`,
        `current_date as creationDate`,
        `comerLotId`,
        `consignmentEventId`,
        `consignmentLotId`,
        `advance`,
        `lotPcts`,
        `sold`,
        `observation`,
        `billDate`,
        `consignmentGoodsId`,
        `billNumber`,
        `annex`,
        `selected`,
        `cylindersNumber`,
        `origin`,
        `originCountry`,
        `lotDescription`,
      ])
      .where(`ID_LOTE = ${lotId}`)
      .andWhere(`NO_BIEN = ${previosGood}`)
      .getRawOne();
  }
}
