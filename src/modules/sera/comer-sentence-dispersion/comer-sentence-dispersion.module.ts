import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { ComerSentenceDispersionController } from './comer-sentence-dispersion.controller';
import { ComerSentenceDispersionService } from './comer-sentence-dispersion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComerEventEntity,
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
