import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotDto } from "../comer-lot/dto/comer-lot.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";
export declare class ComerEventsController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerEventsService, logger: Logger);
    createComerEvent(comerEvent: ComerEventDto): Promise<(ComerEventDto & import("./entities/comer-event.entity").ComerEventEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComerEvents(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-event.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto): Promise<{
        data: import("./entities/comer-event.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddressAndId(comerEvent: UpdateComerEventDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
        count?: undefined;
    } | {
        data: import("./entities/comer-event.entity").ComerEventEntity[];
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
        data: import("./entities/comer-event.entity").ComerEventEntity[];
        count: number;
        statusCode?: undefined;
        message?: undefined;
    }>;
    deleteComerEvent(comer: ComerEventDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
