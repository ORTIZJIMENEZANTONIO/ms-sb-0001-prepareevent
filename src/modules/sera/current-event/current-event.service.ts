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
import { ComerParameterModEntity } from "./dto/comer-parameter-mod.entity";
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
ComerParameterModEntity;
@Injectable()
export class CurrentEventService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @InjectRepository(TmpEventsComerEntity)
    private entityTmpEventsComer: Repository<TmpEventsComerEntity>,
    @InjectRepository(ComerCalendarevEntity)
    private entityComerCalendarev: Repository<ComerCalendarevEntity>,
    @InjectRepository(ComerParameterModEntity)
    private entityComerParameterMod: Repository<ComerParameterModEntity>,
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
    //console.log((new Date()).toLocaleDateString() );
    const variables = {
      events: null,
      currentDays: 0,
      failDate: new Date().toLocaleDateString(),
      nowDate: new Date().toLocaleDateString(),
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
      //console.log(event);
      if (
        (event.address == "I" && event.idTpevent == 4) ||
        (event.address == "M" && event.idTpevent == 4) ||
        (event.address == "M" && event.idTpevent == 1)
      ) {
        // const { value } = await this.getValue("SEI_LQE");
        const validityDate = "12/02/2024" ?? this.getValidityDate();
        if (
          variables.nowDate >= event.eventDate.toLocaleDateString() &&
          variables.nowDate <= validityDate
        ) {
          variables.events = variables.events
            ? `${event.idEvent},`
            : `${event.idEvent}`;
        }
      }

      if (variables.events) {
        const eventsQuery = this.entityComerEvent
          .createQueryBuilder("ce")
          .select([`ID_EVENTO as "idEvent"`, `CVE_PROCESO as "processKey"`])
          .where(`ID_EVENTO in (${variables.events})`);
        return await eventsQuery.getRawMany();
      }
      return null;
    }
  }

  async getValue(parameter: string) {
    const valueQuery = this.entityComerParameterMod
      .createQueryBuilder("cpm")
      .select([`cpm.value as "value"`])
      .where(`cpm.parameter = '${parameter}'`);
    return await valueQuery.getRawOne();
  }

  async getValidityDate() {
    return 1;
  }
}
