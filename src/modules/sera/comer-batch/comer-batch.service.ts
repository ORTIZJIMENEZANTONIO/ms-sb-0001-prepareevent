import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotsEntity } from "./entities/comer-batch.entity";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { UpdateComerBatchDto } from "./dto/update-comer-batch.dto";
// comer_estatusvta pending to join adn autoincrement
@Injectable()
export class ComerBatchService {
  constructor(
    @InjectRepository(ComerLotsEntity)
    private entity: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_lot_served") public counter: Counter<string>
  ) {}

  async createComerLot(comer: ComerLotsDto) {
    const comerExisting = await this.entity.findOneBy({
      id: comer.id,
    });
    
    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerLot existing",
      };
    }
    return await this.entity.save(comer);
  }

  async getAllComersLot(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("cl")
      .innerJoinAndMapOne(
        "cl.eventId",
        ComerEventEntity,
        "ce",
        "cl.eventId = ce.eventId"
      )
      .orderBy({ "cl.publicLot": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerLotByEventId(comer: ComerLotsDto & PaginationDto) {
    const { eventId, inicio = 1, pageSize = 19 } = comer;
    const result = await this.entity
      .createQueryBuilder("cl")
      .innerJoinAndMapOne(
        "cl.eventId",
        ComerEventEntity,
        "ce",
        "cl.eventId = ce.eventId"
      )
      .where({ eventId })
      .orderBy({ "cl.publicLot": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async updateComerLot({lotIdToUpdt}: UpdateComerBatchDto, comer: ComerLotsEntity) {
    const data = await this.entity.findOne({
      where: { id: lotIdToUpdt },
    });

    if (data) {
      delete comer.id;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }
    return false;
  }

  async deleteComerLot(comer: ComerLotsDto) {
    const { id } = comer;
    return await this.entity.delete({ id });
  }
}
