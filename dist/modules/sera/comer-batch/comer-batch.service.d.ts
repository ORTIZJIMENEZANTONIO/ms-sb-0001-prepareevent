import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotsEntity } from "./entities/comer-batch.entity";
import { UpdateComerBatchDto } from "./dto/update-comer-batch.dto";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";
export declare class ComerBatchService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerLotsEntity>, logger: Logger, counter: Counter<string>);
    createComerLotCanceled({ pLotId, pEventId, pLotPubId, pGood, }: ComerLotCanceledDto): Promise<ComerLotsDto & ComerLotsEntity>;
    createComerLot(comer: ComerLotsDto): Promise<(ComerLotsDto & ComerLotsEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComersLot(pagination: PaginationDto): Promise<{
        data: ComerLotsEntity[];
        count: number;
    }>;
    getComerLotByEventId(comer: ComerLotsDto & PaginationDto): Promise<{
        data: ComerLotsEntity[];
        count: number;
    }>;
    getLotToCancel(lotId: number, goodNumber: number): Promise<any>;
    updateComerLot({ lotIdToUpdt }: UpdateComerBatchDto, comer: ComerLotsEntity): Promise<false | ComerLotsEntity>;
    deleteComerLot(comer: ComerLotsDto): Promise<import("typeorm").DeleteResult>;
}
