import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from './dto/comer-batch.dto';
import { ComerLotsEntity } from "./entities/comer-batch.entity";

@Injectable()
export class ComerBatchService {
  constructor(
    @InjectRepository(ComerLotsEntity)
    private entity: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_lot_served") public counter: Counter<string>
  ) {}

  async createComerLot(comerEvent: ComerLotsDto) {
    return await this.entity.save(comerEvent);
  }

  async getAllComersLot({ inicio, pageSize }: PaginationDto) {
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
}
