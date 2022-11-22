import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerGoodsXLotEntity } from "../comer-property-by-lot/entities/comer-property-by-lot.entity";
import { PartialPropertyDeliveredController } from "./partial-property-delivered.controller";
import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";

@Module({
  imports: [TypeOrmModule.forFeature([ComerGoodsXLotEntity])],
  controllers: [PartialPropertyDeliveredController],
  providers: [
    PartialPropertyDeliveredService,
    makeCounterProvider({
      name: "partial_property_delivered_served",
      help: "partial_property_delivered_help",
    }),
  ],
})
export class PartialPropertyDeliveredModule {}
