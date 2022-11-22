import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventEntity } from "./entities/comer-agreement-events.entity";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
import { UpdateComerConvEventDto } from "./dto/update-comer-agreement-events.dto";
export declare class ComerAgreementEventsService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerConvEventEntity>, logger: Logger, counter: Counter<string>);
    createComerConvEvent(comer: ComerConvEventDto): Promise<(ComerConvEventDto & ComerConvEventEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComerConvEvents(pagination: PaginationDto): Promise<{
        data: ComerConvEventEntity[];
        count: number;
    }>;
    getComerConvEventById({ eventId }: ComerConvEventDto): Promise<ComerConvEventEntity>;
    updateComerConvEvent({ eventIdToUpdt, announcementEventIdToUpdt }: UpdateComerConvEventDto, comer: ComerConvEventDto): Promise<ComerConvEventEntity>;
    deleteComerConvEvent(comer: ComerConvEventDto): Promise<import("typeorm").DeleteResult>;
}
