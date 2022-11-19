import { Injectable, Inject, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";
import { ComerEventEntity } from "../comer-events/entities/comer-event.entity";
import { UpdateComerRejectedGoodDto } from "./dto/update-comer-rejected-property.dto";

@Injectable()
export class ComerRejectedPropertyService {
  constructor(
    @InjectRepository(ComerRejectedPropertyEntity)
    private entity: Repository<ComerRejectedPropertyEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_rejected_property_served")
    public counter: Counter<string>
  ) {}

  async createComerRejectedProperty(comer: ComerRejectedGoodDto) {
    const comerExisting = await this.entity.findOneBy({
      id: comer.rejectedGoodId,
    });

    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerRejected existing",
      };
    }

    return await this.entity.save(comer);
  }

  async getAllComersRejectedProperties(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("crp")
      .innerJoinAndMapOne(
        "crp.eventId",
        ComerEventEntity,
        "ce",
        "crp.eventId = ce.eventId"
      )
      .orderBy({ "crp.rejectedGoodId": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerRejectedPropertyById(comer: ComerRejectedGoodDto) {
    const { rejectedGoodId } = comer;
    const result = await this.entity
      .createQueryBuilder("crp")
      .innerJoinAndMapOne(
        "crp.eventId",
        ComerEventEntity,
        "ce",
        "crp.eventId = ce.eventId"
      )
      .where({ rejectedGoodId })
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerRejectedPropertyByEventId(
    comer: PaginationDto & ComerRejectedGoodDto
  ) {
    this.counter.inc();
    const { eventId, inicio = 1, pageSize = 10 } = comer;
    const result = await this.entity
      .createQueryBuilder("crp")
      .innerJoinAndMapOne(
        "crp.eventId",
        ComerEventEntity,
        "ce",
        "crp.eventId = ce.eventId"
      )
      .where({ eventId })
      .orderBy({ "crp.noProperty": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async updateComerRejectedProperty(
    { rejectedGoodIdToUpdt }: UpdateComerRejectedGoodDto,
    comer: ComerRejectedGoodDto
  ) {
    const data = await this.entity.findOneBy({
      id: rejectedGoodIdToUpdt,
    });

    if (data) {
      delete comer.rejectedGoodId;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }
    return null;
  }

  async deleteComerRejectedProperty(comerRejected: ComerRejectedGoodDto) {
    return await this.entity.delete(comerRejected);
  }
}
