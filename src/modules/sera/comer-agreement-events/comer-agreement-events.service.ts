import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventEntity } from "./entities/comer-agreement-events.entity";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
@Injectable()
export class ComerAgreementEventsService {
  constructor(
    @InjectRepository(ComerConvEventEntity)
    private entity: Repository<ComerConvEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_conv_event_served") public counter: Counter<string>
  ) {}

  async createComerConvEvent(comerEvent: ComerConvEventDto) {
    return await this.entity.save(comerEvent);
  }

  async getAllComerConvEvents({ inicio, pageSize }: PaginationDto) {
    const [result, total] = await this.entity.findAndCount({
      order: { eventId: "DESC" },
      take: pageSize || 10,
      skip: (inicio - 1) * pageSize || 0,
    });
    return {
      data: result,
      count: total,
    };
  }

  async getComerConvEventById({ eventId }: ComerConvEventDto) {
    const event = await this.entity.findOneBy({eventId});
    return event ?? [];
  }
}
