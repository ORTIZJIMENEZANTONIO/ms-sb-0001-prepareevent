import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedPropertyDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";

@Injectable()
export class ComerRejectedPropertyService {
  constructor(
    @InjectRepository(ComerRejectedPropertyEntity) private entity: Repository<ComerRejectedPropertyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_rejected_property_served") public counter: Counter<string>
  ) {}

  async createComerRejectedProperty(warehouseDto: ComerRejectedPropertyDto) {
    const rejectedPropertyCreated = await this.entity.save(warehouseDto);
    return rejectedPropertyCreated;
  }

  async getAllComerRejectedPropertys({ inicio, pageSize }: PaginationDto) {
    this.counter.inc();
    const [result, total] = await this.entity.findAndCount({
      skip: inicio ? inicio - 1 : Number(0),
      take: pageSize,
      order: { idRejectedProperty: "DESC" },
    });

    return {
      data: result,
      count: total,
    };
  }

  async getComerRejectedPropertyById(id: number) {
    return await this.entity.findOne({
      where: { idRejectedProperty: id },
    });
  }

  async updateComerRejectedProperty(id: number, updatewarehouseDto: ComerRejectedPropertyDto) {
    const ComerRejectedPropertyFound = await this.entity.findOne({
      where: { idRejectedProperty: id },
    });

    if (ComerRejectedPropertyFound) {
      this.entity.merge(ComerRejectedPropertyFound, updatewarehouseDto);
      return await this.entity.save(ComerRejectedPropertyFound);
    }
    return false;
  }

  async deleteComerRejectedProperty(id: number) {
    return await this.entity.delete(id);
  }
}
