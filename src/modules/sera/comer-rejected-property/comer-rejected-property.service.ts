import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";

@Injectable()
export class ComerRejectedPropertyService {
  constructor(
    @InjectRepository(ComerRejectedPropertyEntity) private entity: Repository<ComerRejectedPropertyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_rejected_property_served") public counter: Counter<string>
  ) {}

  async createComerRejectedProperty(comerRejected: ComerRejectedGoodDto) {
    return await this.entity.save(comerRejected);
  }

  async getAllComersRejectedProperties({ inicio, pageSize }: PaginationDto) {
    this.counter.inc();
    const [result, total] = await this.entity.findAndCount({
      skip: inicio ? inicio - 1 : Number(0),
      take: pageSize,
      order: { rejectedGoodId: "DESC" },
    });

    return {
      data: result,
      count: total,
    };
  }

  async getComerRejectedPropertyById(id: number) {
    return await this.entity.findOne({
      where: { rejectedGoodId: id },
    });
  }

  async deleteComerRejectedProperty(rejectedGoodId: number) {
    return await this.entity.delete(rejectedGoodId);
  }
}
