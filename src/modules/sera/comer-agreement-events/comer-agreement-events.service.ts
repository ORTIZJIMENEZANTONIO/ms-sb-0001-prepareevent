import {
  Injectable,
  Inject,
  Logger,
  NotFoundException,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventEntity } from "./entities/comer-agreement-events.entity";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { UpdateComerConvEventDto } from "./dto/update-comer-agreement-events.dto";
@Injectable()
export class ComerAgreementEventsService {
  constructor(
    @InjectRepository(ComerConvEventEntity)
    private entity: Repository<ComerConvEventEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_conv_event_served") public counter: Counter<string>
  ) {}

  async createComerConvEvent(comer: ComerConvEventDto) {
    const comerExisting = await this.entity.findOneBy({
      eventId: comer.eventId,
      announcementEventId: comer.announcementEventId,
    });

    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerConvEvent existing",
      };
    }

    return await this.entity.save(comer);
  }

  async getAllComerConvEvents(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("ccv")
      .innerJoinAndMapOne(
        "ccv.eventId",
        ComerEventEntity,
        "ce",
        "ccv.eventId = ce.eventId"
      )
      .orderBy({ "ccv.announcementEventId": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerConvEventById({ eventId }: ComerConvEventDto) {
    return await this.entity.findOneBy({ eventId });
  }

  async updateComerConvEvent(
    { eventIdToUpdt, announcementEventIdToUpdt }: UpdateComerConvEventDto,
    comer: ComerConvEventDto
  ) {
    const data = await this.entity.findOneBy({
      eventId: eventIdToUpdt,
      announcementEventId: announcementEventIdToUpdt,
    });

    if (data) {
      delete comer.eventId;
      delete comer.announcementEventId;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }

    return null;
  }

  async deleteComerConvEvent(comer: ComerConvEventDto) {
    const { eventId, announcementEventId } = comer;
    return await this.entity.delete({ eventId, announcementEventId });
  }
}
