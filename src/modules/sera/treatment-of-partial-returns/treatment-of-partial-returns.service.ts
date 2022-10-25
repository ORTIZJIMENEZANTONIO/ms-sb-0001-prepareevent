import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { GoodPartialDeliveryEntity } from "./entities/good-partial-delivery.entity";
import { GoodsEntity } from "../file-util/entities/goods.entity";

@Injectable()
export class TreatmentOfPartialReturnsService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entityGoodXLot: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(ComerLotsEntity)
    private entityComerLot: Repository<ComerLotsEntity>,
    @InjectRepository(GoodPartialDeliveryEntity)
    private entityGoodPartialDelivery: Repository<GoodPartialDeliveryEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("treatment_of_partial_returns_served")
    public counter: Counter<string>
  ) {}

  async treatmentOfPartialReturns(pGood) {
    // OBT_PARAMETROS
    const dev = {
      good: 0,
      lotPrevious: 0,
      event: 0,
      propertyByLotId: 0,
      lotPUb: 0,
    };
  }

  async geReturnLots(pGood: number) {
    const queryLots = this.entityGoodXLot
      .createQueryBuilder("bxl")
      .select([
        "bxl.consignmentGoodsId ",
        "consignmentLotId",
        "propertyByLotId",
      ])
      .addFrom(ComerLotsEntity, "lot")
      .where(`bxl.goodNumber = ${pGood}`)
      .andWhere(`lot.lotId = bxl.lotId`)
      .andWhere(`lot.statusVtaId = 'PAG'`)
      .andWhere(``)
      .take(1);
    return await queryLots.getRawMany();
  }

  async getGoodsPArtialDelivery(goodNumber: number) {
    const queryBep = this.entityGoodPartialDelivery
    .createQueryBuilder("bep")
    .addFrom(GoodsEntity, "bie")
    .where(`bep.no_bien = ${goodNumber}`)
    .andWhere("BEP.NO_BIEN_PARCIAL_EN = BIE.NO_BIEN");

    return await queryBep.getRawMany();
  }
}
