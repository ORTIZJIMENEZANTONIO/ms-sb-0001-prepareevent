import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { GoodPartialDeliveryEntity } from "./entities/good-partial-delivery.entity";
import { PartialPropertyDeliveredService } from "../partial-property-delivered/partial-property-delivered.service";
import { GoodNotDeliveredService } from "../good-not-delivered/good-not-delivered.service";
import { ComerBatchService } from "../comer-batch/comer-batch.service";
export declare class TreatmentOfPartialReturnsService {
    private entityGoodXLot;
    private entityGoodPartialDelivery;
    private readonly logger;
    counter: Counter<string>;
    private partialPropertyDeliveredService;
    private goodNotDeliveredService;
    private comerBatchService;
    constructor(entityGoodXLot: Repository<ComerGoodsXLotEntity>, entityGoodPartialDelivery: Repository<GoodPartialDeliveryEntity>, logger: Logger, counter: Counter<string>, partialPropertyDeliveredService: PartialPropertyDeliveredService, goodNotDeliveredService: GoodNotDeliveredService, comerBatchService: ComerBatchService);
    treatmentOfPartialReturns(goodNumber: number): Promise<{
        cruds: any[];
    }>;
    getReturnLots(goodNumber: number): Promise<any>;
    getGoodsPartialDelivery(goodNumber: number): Promise<any>;
}
