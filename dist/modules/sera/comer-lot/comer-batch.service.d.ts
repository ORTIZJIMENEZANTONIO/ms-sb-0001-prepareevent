import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotDto } from "./dto/comer-lot.dto";
import { ComerLotEntity } from "./entities/comer-lot.entity";
import { UpdateComerLotDto } from "./dto/update-comer-lot.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerLotEntity>, logger: Logger, counter: Counter<string>);
    createComerLotCanceled({ pLotId, pEventId, pLotPubId, pGood, }: ComerLotCanceledDto): Promise<ComerLotDto & ComerLotEntity>;
    createComerLot(comer: ComerLotDto): Promise<(ComerLotDto & ComerLotEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComersLot(pagination: PaginationDto): Promise<{
        data: ComerLotEntity[];
        count: number;
    }>;
    getComerLotByEventId(comer: ComerLotDto & PaginationDto): Promise<{
        data: ComerLotEntity[];
        count: number;
    }>;
    getLotToCancel(lotId: number, goodNumber: number): Promise<any>;
    updateComerLot({ lotIdToUpdt }: UpdateComerLotDto, comer: ComerLotEntity): Promise<false | ComerLotEntity>;
    deleteComerLot(comer: ComerLotDto): Promise<import("typeorm").DeleteResult>;
}
