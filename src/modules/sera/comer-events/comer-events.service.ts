import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventEntity } from "./entities/comer-events.entity";
import { ComerEventDto } from "./dto/comer-events.dto";

@Injectable()
export class ComerEventsService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entity: Repository<ComerEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_event_served") public counter: Counter<string>
  ) {}

  async createComerEvent(comerEvent: ComerEventDto) {
    return await this.entity.save(comerEvent);
  }

  async getAllComerEvents({ inicio, pageSize }: PaginationDto) {
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

  async getComerEventByAddress(address: string) {
    return await this.entity.find({ where: { address } });
  }
}
