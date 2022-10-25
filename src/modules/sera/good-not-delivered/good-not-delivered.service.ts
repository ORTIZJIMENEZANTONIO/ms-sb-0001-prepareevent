import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";

@Injectable()
export class GoodNotDeliveredService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entity: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(ComerLotsEntity)
    private entityLot: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("good_not_delivered_served") public counter: Counter<string>
  ) {}

  /****************************************************************
    CAMBIAR EL BIEN NO ENTREGADO AL LOTE CANCELADO Y EN LA REMESA
  *****************************************************************/
  async updateGoodNotDeliveredToTheCanceledLot({
    lotIdNew,
    lotId,
    bxlId,
    lotConsignment,
    bxlConsignment,
  }: GoodNotDeliveredDto) {
    try {
      const elementUpdated = [];
      elementUpdated.push(
        await this.updateGoodToCancelLot(lotIdNew, lotId, bxlId)
      );
      elementUpdated.push(
        await this.updateConsignmentToPointToGoodCanceled(
          lotIdNew,
          lotConsignment,
          bxlConsignment
        )
      );
      elementUpdated.push(await this.updateFinalPriceLot(lotId));
      elementUpdated.push(await this.updateFinalPriceLot(lotIdNew));

      const rowsAffected = elementUpdated.reduce(
        (el, carry) => el + carry.affected ?? 0,
        0
      );

      return { message: `${rowsAffected} elements updated` };
    } catch (error) {
      console.error(error);
      return { statusCode: 506, message: "Wrong parameters" };
    }
  }

  async updateGoodToCancelLot(lotIdNew: number, lotId: number, bxlId: number) {
    const propertyQuery = this.entity
      .createQueryBuilder()
      .update(ComerGoodsXLotEntity)
      .set({ lotId: lotIdNew })
      .where(`id_lote = ${lotId}`)
      .andWhere(`ID_BIENXLOTE = ${bxlId}`);

    return await propertyQuery.execute();
  }

  async updateConsignmentToPointToGoodCanceled(
    lotIdNew: number,
    lotConsignment: number,
    bxlConsignment: number
  ) {
    const propertyQuery = this.entity
      .createQueryBuilder()
      .update(ComerGoodsXLotEntity)
      .set({ comerLotId: lotIdNew, sold: "N" })
      .where(`id_lote = ${lotConsignment}`)
      .andWhere(`ID_BIENXLOTE = ${bxlConsignment}`);

    return await propertyQuery.execute();
  }

  async updateFinalPriceLot(lotId: number) {
    const queryFinalPrice = await this.entity
      .createQueryBuilder("bxl")
      .select(`coalesce(SUM(bxl.finalPrice), 0) as "finalPrice"`)
      .where(`bxl.ID_LOTE = ${lotId}`)
      .getRawOne();

    if (!queryFinalPrice) {
      return queryFinalPrice;
    }

    const propertyQuery = this.entityLot
      .createQueryBuilder()
      .update(ComerLotsEntity)
      .set({ finalPrice: queryFinalPrice.finalPrice })
      .where(`ID_LOTE = ${lotId}`);

    return await propertyQuery.execute();
  }
}
