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
    createComerEvent(comer: ComerEventDto): Promise<(ComerEventDto & ComerEventEntity) | {
        statusCode: number;
        message: string;
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
    updateComerEvent(): Promise<void>;
    deleteComerEvent(comer: ComerEventDto): Promise<import("typeorm").DeleteResult>;
}
