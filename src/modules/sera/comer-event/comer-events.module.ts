import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerEventsController } from './comer-events.controller';
import { ComerEventsService } from './comer-events.service';
import { ComerEventEntity } from "./entities/comer-event.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerEventEntity])],
  controllers: [ComerEventsController],
  providers: [
    ComerEventsService,
    makeCounterProvider({
      name: "comer_event_served",
      help: "comer_event_help",
    }),
  ]
})
export class ComerEventsModule {}
