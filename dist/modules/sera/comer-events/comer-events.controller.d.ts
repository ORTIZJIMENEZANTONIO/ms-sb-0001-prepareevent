import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
export declare class ComerEventsController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerEventsService, logger: Logger);
    createComerEvent(comerEvent: ComerEventDto): Promise<ComerEventDto & import("./entities/comer-events.entity").ComerEventEntity> | {
        statusCode: number;
        message: string;
        error: string;
    };
    getAllComerEvents({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-events.entity").ComerEventEntity[];
        count: number;
    }>;
    getComerEventByAddress(address: string): Promise<import("./entities/comer-events.entity").ComerEventEntity[] | {
        statusCode: string;
        message: string;
        error: string;
    }>;
}
