import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';
import { ComerPropertyByBatchService } from './comer-property-by-batch.service';
import { ComerGoodsXLotEntity } from "./entities/comer-property-by-batch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerGoodsXLotEntity])],
  controllers: [ComerPropertyByBatchController],
  providers: [
    ComerPropertyByBatchService,
    makeCounterProvider({
      name: "comer_goods_x_lot_served",
      help: "comer_goods_x_lot_help",
    }),
  ]
})
export class ComerPropertyByBatchModule {}
