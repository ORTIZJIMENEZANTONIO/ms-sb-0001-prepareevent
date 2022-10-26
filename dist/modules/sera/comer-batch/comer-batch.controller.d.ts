import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from './dto/comer-batch.dto';
import { ComerBatchService } from "./comer-batch.service";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerBatchService, logger: Logger);
    createComerLot(comer: ComerLotsDto): Promise<(ComerLotsDto & import("./entities/comer-batch.entity").ComerLotsEntity) | {
        statusCode: number;
        message: string;
    }>;
    createComerLotCanceled(comer: ComerLotCanceledDto): Promise<ComerLotsDto & import("./entities/comer-batch.entity").ComerLotsEntity>;
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
