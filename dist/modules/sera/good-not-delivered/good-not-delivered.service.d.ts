import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-lot/entities/comer-property-by-lot.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";
export declare class GoodNotDeliveredService {
    private entity;
    private entityLot;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerGoodsXLotEntity>, entityLot: Repository<ComerLotEntity>, logger: Logger, counter: Counter<string>);
    updateGoodNotDeliveredToTheCanceledLot({ lotIdNew, lotId, bxlId, lotConsignment, bxlConsignment, }: GoodNotDeliveredDto): Promise<{
        message: string;
        statusCode?: undefined;
    } | {
        statusCode: number;
        message: string;
    }>;
    updateGoodToCancelLot(lotIdNew: number, lotId: number, bxlId: number): Promise<import("typeorm").UpdateResult>;
    updateConsignmentToPointToGoodCanceled(lotIdNew: number, lotConsignment: number, bxlConsignment: number): Promise<import("typeorm").UpdateResult>;
    updateFinalPriceLot(lotId: number): Promise<any>;
}
