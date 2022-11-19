import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerBatchController } from './comer-batch.controller';
import { ComerBatchService } from './comer-batch.service';
import { ComerLotEntity } from "./entities/comer-lot.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerLotEntity])],
  controllers: [ComerBatchController],
  providers: [
    ComerBatchService,
    makeCounterProvider({
      name: "comer_lot_served",
      help: "comer_lot_help",
    }),
  ]
})
export class ComerBatchModule {}
