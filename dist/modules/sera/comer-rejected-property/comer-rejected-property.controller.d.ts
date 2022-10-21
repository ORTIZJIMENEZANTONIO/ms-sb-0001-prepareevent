import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyService } from "./comer-rejected-property.service";
import { UpdateComerRejectedGoodDto } from "./dto/update-comer-rejected-property.dto";
export declare class ComerRejectedPropertyController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerRejectedPropertyService, logger: Logger);
    createComerRejectedProperty(comerEvent: ComerRejectedGoodDto): Promise<(ComerRejectedGoodDto & import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComersRejectedProperties(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity[];
        count: number;
    }>;
    getComerRejectedPropertyByEventId(comer: PaginationDto & ComerRejectedGoodDto): Promise<{
        data: import("./entities/comer-rejected-property.entity").ComerRejectedPropertyEntity[];
        count: number;
    }>;
    deleteComerRejectedProperty(comer: ComerRejectedGoodDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
    updateComerRejectedProperty(body: ComerRejectedGoodDto & UpdateComerRejectedGoodDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
