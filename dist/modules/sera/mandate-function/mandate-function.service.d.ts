import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { MandateFunctionDto } from "./dto/mandate-function.dto";
export declare class MandateFunctionService {
    private comerGoodsXLotRepository;
    private comerLotsRepository;
    private readonly logger;
    counter: Counter<string>;
    constructor(comerGoodsXLotRepository: Repository<ComerGoodsXLotEntity>, comerLotsRepository: Repository<ComerLotEntity>, logger: Logger, counter: Counter<string>);
    updateMandate(params: MandateFunctionDto): Promise<{
        transferentNums: any;
        lotUpdt: any;
    }>;
}
