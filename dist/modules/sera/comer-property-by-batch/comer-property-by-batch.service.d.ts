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
    createComerEvent(comerEvent: ComerGoodsXLotDto): Promise<ComerGoodsXLotDto & ComerGoodsXLotEntity>;
    getAllComerEvents({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerGoodsXLotEntity[];
        count: number;
    }>;
    getComerXLotByLotId(comerEvent: ComerGoodsXLotDto): Promise<ComerGoodsXLotEntity[]>;
}
