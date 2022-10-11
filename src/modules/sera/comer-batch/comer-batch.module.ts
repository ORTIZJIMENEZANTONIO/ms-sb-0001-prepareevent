import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerBatchController } from './comer-batch.controller';
import { ComerBatchService } from './comer-batch.service';
import { ComerBatchEntity } from "./entities/comer-batch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerBatchEntity])],
  controllers: [ComerBatchController],
  providers: [
    ComerBatchService,
    makeCounterProvider({
      name: "comer_batch_served",
      help: "comer_batch_help",
    }),
  ]
})
export class ComerBatchModule {}
