import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { GoodPartialDeliveryEntity } from "./entities/good-partial-delivery.entity";
import { GoodsEntity } from "../file-util/entities/goods.entity";
import { PartialPropertyDeliveredService } from "../partial-property-delivered/partial-property-delivered.service";
import { GoodNotDeliveredService } from "../good-not-delivered/good-not-delivered.service";
import { ComerBatchService } from "../comer-batch/comer-batch.service";

@Injectable()
export class TreatmentOfPartialReturnsService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entityGoodXLot: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(GoodPartialDeliveryEntity)
    private entityGoodPartialDelivery: Repository<GoodPartialDeliveryEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("treatment_of_partial_returns_served")
    public counter: Counter<string>,
    private partialPropertyDeliveredService: PartialPropertyDeliveredService,
    private goodNotDeliveredService: GoodNotDeliveredService,
    private comerBatchService: ComerBatchService
  ) {}

  async treatmentOfPartialReturns(goodNumber: number) {
    // OBT_PARAMETROS
    const returnLot = await this.getReturnLots(goodNumber);
    const goodsPartialDelivery = await this.getGoodsPartialDelivery(goodNumber);

    const cruds = [];
    
    if (returnLot) {
      cruds.push(
        await this.goodNotDeliveredService.updateGoodNotDeliveredToTheCanceledLot(
          {
            lotIdNew: returnLot.lotId,
            lotId: returnLot.propertyByLotId,
            bxlId: 1,
            lotConsignment: returnLot.consignmentGoodsId,
            bxlConsignment: returnLot.consignmentLotId,
          }
        )
      );

      cruds.push(
        await this.comerBatchService.createComerLotCanceled({
          pLotId: returnLot.previosGood,
          pEventId: returnLot.eventId,
          pLotPubId: returnLot.lotPub,
          pGood: goodNumber,
        })
      );
    }

    if (goodsPartialDelivery && returnLot) {
      cruds.push(
        this.partialPropertyDeliveredService.createNewPartialGood({
          lotId: returnLot.lotId,
          goodNumber: goodsPartialDelivery.enPartialGoddNumber,
          ldevcant: goodsPartialDelivery.quantity,
          previosGood: goodNumber,
        })
      );
    }

    console.log(cruds);

    return { cruds };
  }

  async getReturnLots(goodNumber: number) {
    const queryLots = this.entityGoodXLot
      .createQueryBuilder("bxl")
      .select([
        `lot.id as "lotId"`,
        `lot.eventId as "eventId"`,
        `bxl.propertyByLotId as "propertyByLotId"`,
        `lot.publicLot as "publicLot" `,
        `bxl.consignmentLotId as "consignmentLotId"`,
        `bxl.consignmentGoodsId as "consignmentGoodsId"`,
      ])
      .addFrom(ComerLotsEntity, "lot")
      .where(`bxl.goodNumber = ${goodNumber}`)
      .andWhere(`lot.id = bxl.lotId`)
      .andWhere(`lot.statusVtaId = 'PAG'`)
      .take(1);
    return await queryLots.getRawOne();
  }

  async getGoodsPartialDelivery(goodNumber: number) {
    const queryBep = this.entityGoodPartialDelivery
      .createQueryBuilder("bep")
      .select([`bep.enPartialGoddNumber`, `bie.quantity`])
      .addFrom(GoodsEntity, "bie")
      .where(`bep.no_bien = ${goodNumber}`)
      .andWhere("BEP.NO_BIEN_PARCIAL_EN = BIE.NO_BIEN");

    return await queryBep.getRawOne();
  }
}
