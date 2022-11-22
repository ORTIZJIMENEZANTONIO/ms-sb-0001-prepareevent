import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerPropertyByBatchService } from "./comer-property-by-batch.service";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-lot.dto";
export declare class ComerPropertyByBatchController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerPropertyByBatchService, logger: Logger);
    createComerGoodXLot(comerEvent: ComerGoodsXLotDto): Promise<(ComerGoodsXLotDto & import("./entities/comer-property-by-lot.entity").ComerGoodsXLotEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComerGoodXLots({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-property-by-lot.entity").ComerGoodsXLotEntity[];
        count: number;
    }>;
    getComerXLotByLotId(comerEvent: ComerGoodsXLotDto & PaginationDto): Promise<{
        data: import("./entities/comer-property-by-lot.entity").ComerGoodsXLotEntity[];
        count: number;
    }>;
    deleteComerXLot(comer: ComerGoodsXLotDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
