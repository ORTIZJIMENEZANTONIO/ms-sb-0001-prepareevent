import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
import { ComerAgreementEventsService } from "./comer-agreement-events.service";
export declare class ComerAgreementEventsController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerAgreementEventsService, logger: Logger);
    createComerConvEvent(comerEvent: ComerConvEventDto): Promise<(ComerConvEventDto & import("./entities/comer-agreement-events.entity").ComerConvEventEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComerConvEvents(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-agreement-events.entity").ComerConvEventEntity[];
        count: number;
    }>;
    getComerConvEventById(comerConvEvent: ComerConvEventDto): Promise<import("./entities/comer-agreement-events.entity").ComerConvEventEntity>;
    deleteComerConvEvent(comer: ComerConvEventDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
