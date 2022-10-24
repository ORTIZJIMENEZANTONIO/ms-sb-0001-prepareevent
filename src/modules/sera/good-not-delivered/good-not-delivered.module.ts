import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { GoodNotDeliveredController } from "./good-not-delivered.controller";
import { GoodNotDeliveredService } from "./good-not-delivered.service";

@Module({
  imports: [TypeOrmModule.forFeature([ComerGoodsXLotEntity, ComerLotsEntity])],
  controllers: [GoodNotDeliveredController],
  providers: [
    GoodNotDeliveredService,
    makeCounterProvider({
      name: "good_not_delivered_served",
      help: "good_not_delivered_help",
    }),
  ],
})
export class GoodNotDeliveredModule {}
