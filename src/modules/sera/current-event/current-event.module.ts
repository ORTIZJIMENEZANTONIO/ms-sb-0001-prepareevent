import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";

import { CurrentEventController } from "./current-event.controller";
import { CurrentEventService } from "./current-event.service";
import { ComerParameterModEntity } from "./entities/comer-parameter-mod.entity";

import { ComerCalendarevEntity } from "./entities/comer-calendar-ev.entity";
import { ComerCatCalendarEntity } from "./entities/comer-catcalendar.entity";
import { TmpEventsComerEntity } from "./entities/tmp-events-comer.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComerCatCalendarEntity,
      ComerCalendarevEntity,
      TmpEventsComerEntity,
      ComerParameterModEntity,
      ComerEventEntity,
    ]),
  ],
  controllers: [CurrentEventController],
  providers: [
    CurrentEventService,
    makeCounterProvider({
      name: "current_event_served",
      help: "current_event_help",
    }),
  ],
})
export class CurrentEventModule {}
