import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventEntity } from "./entities/comer-events.entity";
import { ComerEventDto } from "./dto/comer-events.dto";
export declare class ComerEventsService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerEventEntity>, logger: Logger, counter: Counter<string>);
    createComerEvent(comerEvent: ComerEventDto): Promise<ComerEventDto & ComerEventEntity>;
    getAllComerEvents({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddress(address: string): Promise<ComerEventEntity[]>;
}
