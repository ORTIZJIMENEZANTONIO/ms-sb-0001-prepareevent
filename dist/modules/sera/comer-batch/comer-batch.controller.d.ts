import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from './dto/comer-batch.dto';
import { ComerBatchService } from "./comer-batch.service";
export declare class ComerBatchController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerBatchService, logger: Logger);
    createComerLot(comerEvent: ComerLotsDto): Promise<(ComerLotsDto & import("./entities/comer-batch.entity").ComerLotsEntity) | {
        error: any;
    }>;
    getAllComersLot(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-batch.entity").ComerLotsEntity[];
        count: number;
    }>;
    getComerLotByEventId(comer: ComerLotsDto & PaginationDto): Promise<{
        data: import("./entities/comer-batch.entity").ComerLotsEntity[];
        count: number;
    }>;
    deleteComerLot(comer: ComerLotsDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
