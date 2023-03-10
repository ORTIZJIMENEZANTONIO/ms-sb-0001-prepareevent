import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
import { ComerAdjudirecEntity } from "./entities/comer-adjudirec.entity";
import { UpdateComerAdjudirecDto } from "./dto/update-comer-adjudirec.dto";

@Injectable()
export class ComerAdjudirecService {
  constructor(
    @InjectRepository(ComerAdjudirecEntity)
    private entity: Repository<ComerAdjudirecEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_adjudirec_served") public counter: Counter<string>
  ) {}

  async createComerAdjudirec(comer: ComerAdjudirecDto) {
    const comerExisting = await this.entity.findOneBy({
      id: comer.id,
    });

    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerAdjudirec existing",
      };
    }

    return await this.entity.save(comer);
  }

  async getAllComersAdjudirec(pagination: PaginationDto) {
    const { inicio = 1, pageSize = 10 } = pagination;
    const [result, total] = await this.entity.findAndCount({
      order: { id: "DESC" },
      take: pageSize,
      skip: (inicio - 1) * pageSize || 0,
    });
    return {
      data: result,
      count: total,
    };
  }

  async updateComerAdjudirec(
    { eventIdToUpdt }: UpdateComerAdjudirecDto,
    comer: ComerAdjudirecDto
  ) {
    const data = await this.entity.findOneBy({ id: eventIdToUpdt });

    if (data) {
      delete comer.id;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }

    return null;
  }

  async deleteComerAdjudirec(comer: ComerAdjudirecDto) {
    const { id } = comer;
    return await this.entity.delete({ id });
  }
}
