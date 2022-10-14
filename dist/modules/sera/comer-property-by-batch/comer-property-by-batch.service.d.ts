import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerGoodsXLotEntity } from "./entities/comer-property-by-batch.entity";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-batch.dto";
export declare class ComerPropertyByBatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, logger: Logger, counter: Counter<string>);
    createComerGoodXLot(comerEvent: ComerGoodsXLotDto): Promise<(ComerGoodsXLotDto & ComerGoodsXLotEntity) | {
        error: any;
    }>;
    getAllComerGoodXLots({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerGoodsXLotEntity[];
        count: number;
    }>;
    getComerXLotByLotId(comerEvent: ComerGoodsXLotDto & PaginationDto): Promise<{
        data: ComerGoodsXLotEntity[];
        count: number;
    }>;
    updateComerXLot(): Promise<void>;
    deleteComerXLot(comer: ComerGoodsXLotDto): Promise<import("typeorm").DeleteResult>;
}
