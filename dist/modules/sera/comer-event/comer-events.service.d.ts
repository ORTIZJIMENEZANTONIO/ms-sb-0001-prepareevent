import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerEventEntity } from "./entities/comer-event.entity";
import { ComerLotDto } from "../comer-lot/dto/comer-lot.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";
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
    getComerEventByAddressAndId(comerEvent: UpdateComerEventDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
        count?: undefined;
    } | {
        data: ComerEventEntity[];
        count: number;
        statusCode?: undefined;
        message?: undefined;
    }>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotDto & PaginationDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
        count?: undefined;
    } | {
        data: ComerEventEntity[];
        count: number;
        statusCode?: undefined;
        message?: undefined;
    }>;
    updateComerEvent({ eventIdToUpdt }: UpdateComerEventDto, comer: ComerEventDto): Promise<ComerEventEntity>;
    deleteComerEvent(comer: ComerEventDto): Promise<import("typeorm").DeleteResult>;
}
