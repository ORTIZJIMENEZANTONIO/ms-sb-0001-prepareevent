import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-lot/entities/comer-property-by-lot.entity";
import { GoodNotDeliveredController } from "./good-not-delivered.controller";
import { GoodNotDeliveredService } from "./good-not-delivered.service";

@Module({
  imports: [TypeOrmModule.forFeature([ComerGoodsXLotEntity, ComerLotEntity])],
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
