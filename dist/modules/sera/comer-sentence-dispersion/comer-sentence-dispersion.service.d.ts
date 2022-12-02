import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
import { ComerPaymentReferenceEntity } from "./entities/comer-payment-ref.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerParameterModEntity } from "../current-event/entities/comer-parameter-mod.entity";
export declare class ComerSentenceDispersionService {
    private entityComerEvent;
    private entityComerPaymentRef;
    private entityComerLot;
    private entityComerParameterMod;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityComerEvent: Repository<ComerEventEntity>, entityComerPaymentRef: Repository<ComerPaymentReferenceEntity>, entityComerLot: Repository<ComerLotEntity>, entityComerParameterMod: Repository<ComerParameterModEntity>, logger: Logger, counter: Counter<string>);
    setSentenceDispersion(params: SentenceDispersionDto): Promise<string>;
    getCost(lotId: Number): Promise<any[]>;
    getPenalty(id: any): Promise<any>;
    getLot(lotId: number): Promise<any>;
    getValueParameter(lvDeftPenalty: string, address: string): Promise<any>;
    getFailDates(eventId: number, lvDaysLimit: number, lvDaysLimit2: number): Promise<any>;
}
