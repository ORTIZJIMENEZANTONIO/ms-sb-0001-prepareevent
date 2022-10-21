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
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
import { Text } from "src/shared/functions/text";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";
// comer_tpeventos pending
// comer_estatusvta pending
@Injectable()
export class ComerEventsService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entity: Repository<ComerEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_event_served") public counter: Counter<string>
  ) {}

  async createComerEvent(comer: ComerEventDto) {
    const comerExisting = await this.entity.findOneBy({
      eventId: comer.eventId,
    });

    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerEvent existing",
      };
    }

    return await this.entity.save(comer);
  }

  async getAllComerEvents(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("ce")
      //.innerJoinAndMapOne(
      //  "crp.eventId",
      //  ComerEventEntity,
      //  "ce",
      //  "crp.eventId = ce.eventId"
      //)
      .orderBy({ "ce.eventId": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto) {
    const { address, inicio = 1, pageSize = 10 } = comerEvent;
    const result = await this.entity
      .createQueryBuilder("table")
      .where(
        `${Text.formatTextDb("table.address")} like '%${Text.formatText(
          address
        )}%' `
      )
      .take(pageSize)
      .skip((inicio - 1) * pageSize || 0)
      .orderBy("table.eventTpId", "DESC")
      .addOrderBy("table.eventId", "DESC")
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
    //console.log(Reference.calculateReference("HSBC", 68807, "800000", "PAG"));
    //console.log(
    //  Reference.calculateReference("BANAMEX", 68807, "800000", "PAG")
    //);
  }

  async getComerEventByAddressAndId(comerEvent: UpdateComerEventDto) {
    const { address, eventId } = comerEvent;
    const result = await this.entity
      .createQueryBuilder("table")
      .where({ eventId })
      .andWhere(
        `${Text.formatTextDb("table.address")} like '%${Text.formatText(
          address
        )}%' `
      )
      .orderBy("table.eventId", "DESC")
      .getManyAndCount();

    return result[0]
      ? { statusCode: 404, message: "ComerEvent not found" }
      : {
          data: result[0] ?? [],
          count: result[1] ?? 0,
        };
  }

  async getComerEventByTpEvent(
    comerEvent: ComerEventDto & ComerLotsDto & PaginationDto
  ) {
    const { eventTpId, id, address, inicio = 1, pageSize = 10 } = comerEvent;
    const lotId = id;
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

    const result = await this.entity
      .createQueryBuilder("t")
      .where({ eventTpId })
      .andWhere({ address })
      .take(pageSize)
      .skip((inicio - 1) * pageSize || 0)
      .orderBy("t.eventId", "DESC")
      .getManyAndCount();
    console.log(result[0]);
    return subQuery.length < 1 || result[0].length < 1
      ? { statusCode: 404, message: "ComerEvent not found" }
      : {
          data: result[0] ?? [],
          count: result[1] ?? 0,
        };
  }

  async updateComerEvent(
    { eventIdToUpdt }: UpdateComerEventDto,
    comer: ComerEventDto
  ) {
    const data = await this.entity.findOneBy({ eventId: eventIdToUpdt });

    if (data) {
      delete comer.eventId;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }
    return null;
  }

  async deleteComerEvent(comer: ComerEventDto) {
    const { eventId } = comer;
    return await this.entity.delete({ eventId });
  }
}
