import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerCatCalendarEntity } from "./entities/comer-catcalendar.entity";
import { ComerCalendarevEntity } from "./entities/comer-calendar-ev.entity";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
import { TmpEventsComerEntity } from "./entities/tmp-events-comer.entity";

@Injectable()
export class CurrentEventService {
  constructor(
    @InjectRepository(TmpEventsComerEntity)
    private entityTmpEventsComer: Repository<TmpEventsComerEntity>,
    @InjectRepository(ComerCalendarevEntity)
    private entityComerCalendarev: Repository<ComerCalendarevEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("current_event_served") public counter: Counter<string>
  ) {}

  async getCurrentEvents(filter: CurrentFilterDto) {
    const { month, year } = filter;
    //console.log(month, year);
    const queryEvents = this.entityComerCalendarev
      .createQueryBuilder("cc")
      .select([
        `cc.year as "year"`,
        `cc.day as "day"`,
        `ccc.active as "active"`,
        `ccc.color as "color"`,
        `ccc.description as "description"`,
        `cc.idEvent as "idEvent"`,
        `cc.month as "month"`,
        `cc.daysRange as "daysRange"`,
      ])
      .leftJoin(ComerCatCalendarEntity, "ccc", "ccc.id = cc.idStatus")
      .where(`cc.month = ${month}`)
      .andWhere(`cc.year = ${year}`);

    // console.log(queryEvents.getQuery());
    return await queryEvents.getRawMany();
  }

  async spEventsInProgress() {
    const variables = {
      events: null
    };
    const eventsQuery = this.entityTmpEventsComer
      .createQueryBuilder("ev")
      .select([
        `ID_EVENTO as "idEvent"`,
        `DIRECCION as "address"`,
        `ID_TPEVENTO as "idTpevent"`,
        `FEC_FALLO as "failDate"`,
        `FECHA_EVENTO as "eventDate"`,
      ]);
    const events = await eventsQuery.getRawMany();
    for (const event of events) {
      console.log(event);
      if (event.address == "I" && event.idTpevent == 4) {
      }

      if (event.address == "M" && event.idTpevent == 4) {
      }

      if (event.address == "M" && event.idTpevent == 1) {
      }
    }
    //console.log(events.getQuery());
    return await eventsQuery.getRawMany();
  }
}
