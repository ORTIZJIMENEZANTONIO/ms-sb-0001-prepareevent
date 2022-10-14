import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotsEntity } from "./entities/comer-batch.entity";
export declare class ComerBatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerLotsEntity>, logger: Logger, counter: Counter<string>);
    createComerLot(comerEvent: ComerLotsDto): Promise<(ComerLotsDto & ComerLotsEntity) | {
        error: any;
    }>;
    getAllComersLot(pagination: PaginationDto): Promise<{
        data: ComerLotsEntity[];
        count: number;
    }>;
    getComerLotByEventId(comer: ComerLotsDto & PaginationDto): Promise<{
        data: ComerLotsEntity[];
        count: number;
    }>;
    updateComerLot(): Promise<void>;
    deleteComerLot(comer: ComerLotsDto): Promise<import("typeorm").DeleteResult>;
}
