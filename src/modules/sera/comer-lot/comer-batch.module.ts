import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerLotController } from './comer-batch.controller';
import { ComerLotService } from './comer-batch.service';
import { ComerLotEntity } from "./entities/comer-lot.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerLotEntity])],
  controllers: [ComerLotController],
  providers: [
    ComerLotService,
    makeCounterProvider({
      name: "comer_lot_served",
      help: "comer_lot_help",
    }),
  ]
})
export class ComerLotModule {}
