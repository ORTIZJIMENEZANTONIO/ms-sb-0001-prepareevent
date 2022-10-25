import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { MandateFunctionService } from "./mandate-function.service";
import { MandateFunctionController } from "./mandate-function.controller";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerGoodsXLotEntity, ComerLotsEntity])],
  controllers: [MandateFunctionController],
  providers: [
    MandateFunctionService,
    makeCounterProvider({
      name: "mandate_function_served",
      help: "mandate_function_help",
    }),
  ],
})
export class MandateFunctionModule {}
