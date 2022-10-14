import { Injectable, Inject, Logger, NotFoundException, HttpException, HttpStatus } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventEntity } from "./entities/comer-agreement-events.entity";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
@Injectable()
export class ComerAgreementEventsService {
  constructor(
    @InjectRepository(ComerConvEventEntity)
    private entity: Repository<ComerConvEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_conv_event_served") public counter: Counter<string>
  ) {}

  async createComerConvEvent(comerEvent: ComerConvEventDto) {
    try {
      return await this.entity.save(comerEvent);
    } catch (error) {
      return {error: error.detail}
    }
  }

  async getAllComerConvEvents(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("ccv")
      .innerJoinAndMapOne(
        "ccv.eventId",
        ComerEventEntity,
        "ce",
        "ccv.eventId = ce.eventId"
      )
      .orderBy({ "ccv.announcementEventId": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerConvEventById({ eventId }: ComerConvEventDto) {
    const event = await this.entity.findOneBy({ eventId });
    return event ?? [];
  }
}
