import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerBatchDto } from "../comer-batch/dto/comer-batch.dto";
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
    getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto): Promise<import("./entities/comer-events.entity").ComerEventEntity[]>;
    getComerEventByAddressAndId(comerEvent: ComerEventDto): Promise<import("./entities/comer-events.entity").ComerEventEntity[]>;
    getComerEventByTpEvent(comerEvent: ComerEventDto & ComerBatchDto & PaginationDto): Promise<any[] | import("./entities/comer-events.entity").ComerEventEntity[]>;
}
