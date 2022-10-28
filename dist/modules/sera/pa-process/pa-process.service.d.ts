import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ActGoodLotMDto } from "./dto/actGoodLotM.dto";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { PaRejectDto } from "./dto/reject.dto";
export declare class PaProcessService {
    private entityComerEvent;
    private entityGoods;
    private entityComerLot;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityComerEvent: Repository<ComerEventEntity>, entityGoods: Repository<ComerEventEntity>, entityComerLot: Repository<ComerLotsEntity>, logger: Logger, counter: Counter<string>);
    paActGoodLotMDto(params: ActGoodLotMDto): Promise<void>;
    paReject(params: PaRejectDto): Promise<void>;
}
