import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerAgreementEventsService } from './comer-agreement-events.service';
import { ComerAgreementEventsController } from './comer-agreement-events.controller';
import { ComerConvEventEntity } from "./entities/comer-agreement-events.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerConvEventEntity])],
  controllers: [ComerAgreementEventsController],
  providers: [ComerAgreementEventsService],

})
export class ComerAgreementEventsModule {}
