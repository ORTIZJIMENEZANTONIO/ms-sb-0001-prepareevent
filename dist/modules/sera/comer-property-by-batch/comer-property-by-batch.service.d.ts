import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerGoodsXLotEntity } from "./entities/comer-property-by-batch.entity";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-batch.dto";
import { UpdateComerGoodsXLotDto } from "./dto/update-comer-property-by-batch.dto";
export declare class ComerPropertyByBatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, logger: Logger, counter: Counter<string>);
    createComerGoodXLot(comer: ComerGoodsXLotDto): Promise<(ComerGoodsXLotDto & ComerGoodsXLotEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComerGoodXLots({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerGoodsXLotEntity[];
        count: number;
    }>;
    getComerXLotByLotId(comerEvent: ComerGoodsXLotDto & PaginationDto): Promise<{
        data: ComerGoodsXLotEntity[];
        count: number;
    }>;
    updateComerXLot({ goodIdToUpdt, lotIdToUpdt }: UpdateComerGoodsXLotDto, comer: ComerGoodsXLotDto): Promise<ComerGoodsXLotEntity>;
    deleteComerXLot(comer: ComerGoodsXLotDto): Promise<import("typeorm").DeleteResult>;
}
