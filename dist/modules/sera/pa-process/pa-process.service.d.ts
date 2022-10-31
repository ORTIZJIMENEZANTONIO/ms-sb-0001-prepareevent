import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerRejectedPropertyEntity } from "../comer-rejected-property/entities/comer-rejected-property.entity";
import { ActGoodLotMDto } from "./dto/act-good-lot-m.dto";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
export declare class PaProcessService {
    private entityComerEvent;
    private entityGoods;
    private entityComerLot;
    private entityComerRejected;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityComerEvent: Repository<ComerEventEntity>, entityGoods: Repository<ComerEventEntity>, entityComerLot: Repository<ComerLotsEntity>, entityComerRejected: Repository<ComerRejectedPropertyEntity>, logger: Logger, counter: Counter<string>);
    paActGoodLotMDto(params: ActGoodLotMDto): Promise<void>;
    paReject(params: PaRejectDto): Promise<{
        created: number;
        createdErrors: number;
        updated: number;
        updatedErrors: number;
    }>;
    paRemittancePrepByGood(params: RemittancePrepByGoodDto): Promise<{
        created: number;
        createdErrors: number;
        updated: number;
        updatedErrors: number;
    }>;
    paChangeStatusValidate(): Promise<void>;
}
