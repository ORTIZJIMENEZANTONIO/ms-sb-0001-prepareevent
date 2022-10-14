import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { MandateFunctionDto } from "./dto/mandate-function.dto";
export declare class MandateFunctionService {
    private comerGoodsXLotRepository;
    private comerLotsRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(comerGoodsXLotRepository: Repository<ComerGoodsXLotEntity>, comerLotsRepository: Repository<ComerLotsEntity>, logger: Logger, counter: Counter<string>);
    updateMandate(params: MandateFunctionDto): Promise<{
        success: boolean;
    }>;
}
