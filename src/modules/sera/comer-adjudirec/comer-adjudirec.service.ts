import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
import { ComerAdjudirecEntity } from "./entities/comer-adjudirec.entity";

@Injectable()
export class ComerAdjudirecService {
  constructor(
    @InjectRepository(ComerAdjudirecEntity)
    private entity: Repository<ComerAdjudirecEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_adjudirec_served") public counter: Counter<string>
  ) {}

  async createComerAdjudirec(comerEvent: ComerAdjudirecDto) {
    try {
      return await this.entity.save(comerEvent);
    } catch (error) {
      return { error: error.detail };
    }
  }

  async getAllComersAdjudirec(pagination: PaginationDto) {
    const { inicio = 1, pageSize = 10} = pagination;
    const [result, total] = await this.entity.findAndCount({
      order: { eventId: "DESC" },
      take: pageSize,
      skip: (inicio - 1) * pageSize || 0,
    });
    return {
      data: result,
      count: total,
    };
  }

  async updateComerAdjudirec() {}

  async deleteComerAdjudirec(comer: ComerAdjudirecDto) {
    const { eventId } = comer;
    return await this.entity.delete({eventId})
  }
}
