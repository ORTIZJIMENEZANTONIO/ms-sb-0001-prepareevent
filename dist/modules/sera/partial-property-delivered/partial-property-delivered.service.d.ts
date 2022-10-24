import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
export declare class PartialPropertyDeliveredService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, logger: Logger, counter: Counter<string>);
    insertNewPartialGood(lotId: number, goodNumber: number, ldevcant: number, previosGood: number): Promise<{}>;
    getLastId(lotId: number): Promise<any>;
    getLotValues(lotId: number, ldevcant: number, globalVat: number, previosGood: number): Promise<any>;
}
