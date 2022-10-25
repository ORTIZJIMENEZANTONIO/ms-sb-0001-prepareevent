import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { GoodNotDeliveredService } from "../good-not-delivered/good-not-delivered.service";
import { PartialPropertyDeliveredService } from "../partial-property-delivered/partial-property-delivered.service";
import { GoodPartialDeliveryEntity } from "./entities/good-partial-delivery.entity";
import { TreatmentOfPartialReturnsController } from "./treatment-of-partial-returns.controller";
import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComerGoodsXLotEntity,
      ComerLotsEntity,
      GoodPartialDeliveryEntity
    ]),
  ],
  controllers: [TreatmentOfPartialReturnsController],
  providers: [
    TreatmentOfPartialReturnsService,
    PartialPropertyDeliveredService,
    GoodNotDeliveredService,
    makeCounterProvider({
      name: "treatment_of_partial_returns_served",
      help: "treatment_of_partial_returns_help",
    }),
    makeCounterProvider({
      name: "partial_property_delivered_served",
      help: "partial_property_delivered_help",
    }),
    makeCounterProvider({
      name: "good_not_delivered_served",
      help: "good_not_delivered_help",
    }),
  ],
})
export class TreatmentOfPartialReturnsModule {}
