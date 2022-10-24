import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { GoodPartialDelivery } from "./dto/good-partial-delivery.dto";
export declare class TreatmentOfPartialReturnsService {
    private entityGoodXLot;
    private entityComerLot;
    private entityGoodPartialDelivery;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityGoodXLot: Repository<ComerGoodsXLotEntity>, entityComerLot: Repository<ComerLotsEntity>, entityGoodPartialDelivery: Repository<GoodPartialDelivery>, logger: Logger, counter: Counter<string>);
    treatmentOfPartialReturns(pGood: any): Promise<void>;
    geReturnLots(pGood: number): Promise<any[]>;
    getGoodsPArtialDelivery(goodNumber: number): Promise<any[]>;
}
