import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';
import { ComerPropertyByBatchService } from './comer-property-by-batch.service';
import { ComerPropertyByBatchEntity } from "./entities/comer-property-by-batch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerPropertyByBatchEntity])],
  controllers: [ComerPropertyByBatchController],
  providers: [
    ComerPropertyByBatchService,
    makeCounterProvider({
      name: "comer_proeprt_by_batch_served",
      help: "comer_proeprt_by_batch_help",
    }),
  ]
})
export class ComerPropertyByBatchModule {}
