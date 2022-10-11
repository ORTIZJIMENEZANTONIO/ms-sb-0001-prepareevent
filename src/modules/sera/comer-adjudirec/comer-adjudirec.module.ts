import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerAdjudirecService } from './comer-adjudirec.service';
import { ComerAdjudirecController } from './comer-adjudirec.controller';
import { ComerAdjudirecEntity } from "./entities/comer-adjudirec.entity";
@Module({
  imports: [TypeOrmModule.forFeature([ComerAdjudirecEntity])],
  controllers: [ComerAdjudirecController],
  providers: [
    ComerAdjudirecService,
    makeCounterProvider({
      name: "comer_adjudirec_served",
      help: "comer_adjudirec_help",
    }),
  ],
})
export class ComerAdjudirecModule {}
