import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { FileUtilController } from "./file-util.controller";
import { FileUtilService } from "./file-util.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComerGoodsXLotEntity,
      ComerLotsEntity,
      ComerEventEntity,
    ]),
  ],
  controllers: [FileUtilController],
  providers: [
    FileUtilService,
    makeCounterProvider({
      name: "file_util_served",
      help: "file_util_help",
    }),
  ],
})
export class FileUtilModule {}
