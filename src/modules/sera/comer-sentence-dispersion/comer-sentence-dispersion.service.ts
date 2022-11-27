import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";

@Injectable()
export class ComerSentenceDispersionService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    // @InjectRepository(TmpEventsComerEntity)
    // private entityTmpEventsComer: Repository<TmpEventsComerEntity>,
    // @InjectRepository(ComerCalendarevEntity)
    // private entityComerCalendarev: Repository<ComerCalendarevEntity>,
    // @InjectRepository(ComerParameterModEntity)
    // private entityComerParameterMod: Repository<ComerParameterModEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_sentence_served") public counter: Counter<string>
  ) {}

  async setSentenceDispersion(params: SentenceDispersionDto) {
    return null;
  }

  async getCost() {}
}
