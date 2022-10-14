import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientEntity } from "./entities/comer-client.entity";
import { ComerClientDto } from "./dto/comer-client.dto.";

@Injectable()
export class ComerClientService {
  constructor(
    @InjectRepository(ComerClientEntity)
    private entity: Repository<ComerClientEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_client_served") public counter: Counter<string>
  ) {}

  async createComerClient(comer: ComerClientDto) {
    try {
      return await this.entity.save(comer);
    } catch (error) {
      return { error: error.detail };
    }
  }

  async getAllComersClient({ inicio, pageSize }: PaginationDto) {
    const [result, total] = await this.entity.findAndCount({
      order: { clientId: "DESC" },
      take: pageSize || 10,
      skip: (inicio - 1) * pageSize || 0,
    });
    return {
      data: result,
      count: total,
    };
  }
}
