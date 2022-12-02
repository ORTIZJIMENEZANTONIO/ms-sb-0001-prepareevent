import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerParameterModEntity } from "../current-event/entities/comer-parameter-mod.entity";
import { ComerSentenceDispersionController } from './comer-sentence-dispersion.controller';
import { ComerSentenceDispersionService } from './comer-sentence-dispersion.service';
import { ComerPaymentReferenceEntity } from "./entities/comer-payment-ref.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComerEventEntity,
      ComerPaymentReferenceEntity,
      ComerLotEntity,
      ComerParameterModEntity
    ]),
  ],
  controllers: [ComerSentenceDispersionController],
  providers: [ComerSentenceDispersionService,
    makeCounterProvider({
      name: "comer_sentence_served",
      help: "comer_sentence_help",
    }),]
})
export class ComerSentenceDispersionModule {}
