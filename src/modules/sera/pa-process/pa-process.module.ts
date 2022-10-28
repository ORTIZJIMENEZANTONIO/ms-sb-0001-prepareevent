import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";

import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { PaProcessController } from "./pa-process.controller";
import { PaProcessService } from "./pa-process.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([GoodsEntity, ComerEventEntity, ComerLotsEntity]),
  ],
  controllers: [PaProcessController],
  providers: [
    PaProcessService,
    makeCounterProvider({
      name: "pa_process_served",
      help: "pa_process_help",
    }),
  ],
})
export class PaProcessModule {}
