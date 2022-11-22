import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-lot/entities/comer-property-by-lot.entity";
import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";
export declare class PartialPropertyDeliveredService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, logger: Logger, counter: Counter<string>);
    createNewPartialGood({ lotId, goodNumber, ldevcant, previosGood, }: PartialPropertyDelivered): Promise<any>;
    getLastId(lotId: number): Promise<any>;
    getLotValues(lotId: number, ldevcant: number, globalVat: number, previosGood: number): Promise<any>;
}
