import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
export declare class ComerEventsController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerEventsService, logger: Logger);
    createComerEvent(comerEvent: ComerEventDto): Promise<(ComerEventDto & import("./entities/comer-events.entity").ComerEventEntity) | {
        error: any;
    }>;
    getAllComerEvents(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-events.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto): Promise<{
        data: import("./entities/comer-events.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddressAndId(comerEvent: ComerEventDto): Promise<{
        data: import("./entities/comer-events.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotsDto & PaginationDto): Promise<any[] | {
        data: import("./entities/comer-events.entity").ComerEventEntity[];
        count: number;
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
