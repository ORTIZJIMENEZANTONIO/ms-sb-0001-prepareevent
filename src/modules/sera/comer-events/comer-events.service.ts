import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerEventEntity } from "./entities/comer-events.entity";
import { Reference } from "src/shared/functions/reference";
import { ComerBatchDto } from "../comer-batch/dto/comer-batch.dto";

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

  async getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto) {
    const { address, inicio = 1, pageSize = 10 } = comerEvent;
    const events = await this.entity
      .createQueryBuilder("table")
      .where({ address: address })
      .take(pageSize)
      .skip((inicio - 1) * pageSize || 0)
      .orderBy("table.eventId", "DESC")
      .addOrderBy("table.eventTpId", "DESC")
      .getMany();

    console.log(Reference.calculateReference("HSBC", 68807, '800000', "PAG"))
    console.log(Reference.calculateReference("BANAMEX", 68807, '800000', "PAG"))
    //if (events.length < 1)
    //  throw new NotFoundException( `Comer event not found with address: ${address} `);
    return events;
  }

  async getComerEventByAddressAndId(comerEvent: ComerEventDto) {
    const { address, eventId } = comerEvent;
    const events = await this.entity
      .createQueryBuilder("table")
      .where({ eventId })
      .andWhere({ address })
      .orderBy("table.eventId", "DESC")
      .getMany();

    return events;
  }

  async getComerEventByTpEvent(comerEvent: ComerEventDto & ComerBatchDto & PaginationDto) {
    const { eventTpId, lotId, address, inicio = 1, pageSize = 10 } = comerEvent;
    const subQueryDeep = await this.entity.query(`
      SELECT 1
      FROM   sera.COMER_BIENESXLOTE BXL
      WHERE  BXL.ID_LOTE = ${lotId}
      AND  BXL.VENDIDO IS NULL
    `);

    const subQuery = await this.entity.query(`
      SELECT 1
      FROM   sera.COMER_LOTES LOT
      WHERE  ${subQueryDeep.length > 0}
    `);

    const events = await this.entity
      .createQueryBuilder("t")
      .where({ eventTpId })
      .andWhere({ address })
      .take(pageSize)
      .skip((inicio - 1) * pageSize || 0)
      .orderBy("t.eventId", "DESC");

    return subQuery.length < 1 ? [] : events.getMany();
  }
}
