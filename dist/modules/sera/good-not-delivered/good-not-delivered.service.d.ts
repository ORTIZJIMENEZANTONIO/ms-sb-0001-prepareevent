import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
export declare class GoodNotDeliveredService {
    private entity;
    private entityLot;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, entityLot: Repository<ComerLotsEntity>, logger: Logger, counter: Counter<string>);
    changeGoodNotDeliveredToTheCanceledLot(lotIdNew: number, lotId: number, bxlId: number, lotConsignment: number, bxlConsignment: number): Promise<{}>;
    updateGoodToCancelLot(lotIdNew: number, lotId: number, bxlId: number): Promise<import("typeorm").UpdateResult>;
    updateConsignmentToPointToGoodCanceled(lotIdNew: number, lotConsignment: number, bxlConsignment: number): Promise<import("typeorm").UpdateResult>;
    updateFinalPriceLot(lotId: number): Promise<import("typeorm").UpdateResult>;
}
