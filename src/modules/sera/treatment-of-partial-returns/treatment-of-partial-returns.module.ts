import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
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
    makeCounterProvider({
      name: "treatment_of_partial_returns_served",
      help: "treatment_of_partial_returns_help",
    }),
  ],
})
export class TreatmentOfPartialReturnsModule {}
