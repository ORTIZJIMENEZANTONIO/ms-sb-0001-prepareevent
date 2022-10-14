import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerBatchController } from './comer-batch.controller';
import { ComerBatchService } from './comer-batch.service';
import { ComerLotsEntity } from "./entities/comer-batch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerLotsEntity])],
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
