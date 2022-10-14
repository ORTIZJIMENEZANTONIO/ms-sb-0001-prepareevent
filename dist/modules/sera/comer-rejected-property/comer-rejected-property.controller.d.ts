import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyService } from "./comer-rejected-property.service";
export declare class ComerRejectedPropertyController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerRejectedPropertyService, logger: Logger);
    createComerRejectedProperty(comerEvent: ComerRejectedGoodDto): Promise<ComerRejectedGoodDto & import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity> | {
        statusCode: number;
        message: string;
        error: string;
    };
    getAllComersRejectedProperties({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity[];
        count: number;
    }>;
    getComerRejectedPropertyByEventId(comer: PaginationDto & ComerRejectedGoodDto): Promise<{
        data: import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity[];
        count: number;
    }>;
}
