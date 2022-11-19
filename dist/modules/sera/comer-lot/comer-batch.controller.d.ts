import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotDto } from './dto/comer-lot.dto';
import { ComerBatchService } from "./comer-batch.service";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerBatchService, logger: Logger);
    createComerLot(comer: ComerLotDto): Promise<(ComerLotDto & import("./entities/comer-lot.entity").ComerLotEntity) | {
        statusCode: number;
        message: string;
    }>;
    createComerLotCanceled(comer: ComerLotCanceledDto): Promise<ComerLotDto & import("./entities/comer-lot.entity").ComerLotEntity>;
    getAllComersLot(pagination: PaginationDto): Promise<{
        data: import("./entities/comer-lot.entity").ComerLotEntity[];
        count: number;
    }>;
    getComerLotByEventId(comer: ComerLotDto & PaginationDto): Promise<{
        data: import("./entities/comer-lot.entity").ComerLotEntity[];
        count: number;
    }>;
    deleteComerLot(comer: ComerLotDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
