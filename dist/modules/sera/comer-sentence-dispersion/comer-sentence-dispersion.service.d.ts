import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
export declare class ComerSentenceDispersionService {
    private entityComerEvent;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityComerEvent: Repository<ComerEventEntity>, logger: Logger, counter: Counter<string>);
    setSentenceDispersion(params: SentenceDispersionDto): Promise<any>;
    getCost(): Promise<void>;
}
