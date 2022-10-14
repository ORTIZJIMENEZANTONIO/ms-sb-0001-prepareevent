import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerEventEntity } from "./entities/comer-events.entity";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
export declare class ComerEventsService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerEventEntity>, logger: Logger, counter: Counter<string>);
    createComerEvent(comerEvent: ComerEventDto): Promise<(ComerEventDto & ComerEventEntity) | {
        error: any;
    }>;
    getAllComerEvents(pagination: PaginationDto): Promise<{
        data: ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto): Promise<{
        data: ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddressAndId(comerEvent: ComerEventDto): Promise<{
        data: ComerEventEntity[];
        count: number;
    }>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotsDto & PaginationDto): Promise<any[] | {
        data: ComerEventEntity[];
        count: number;
    }>;
}
