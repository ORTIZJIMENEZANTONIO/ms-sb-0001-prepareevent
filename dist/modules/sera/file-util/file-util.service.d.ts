import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { UpdateComerBatchDto } from "../comer-batch/dto/update-comer-batch.dto";
import { UpdateComerGoodsXLotDto } from "../comer-property-by-batch/dto/update-comer-property-by-batch.dto";
export declare class FileUtilService {
    private entityGoodXLot;
    private entityComerLot;
    private entityComerEvent;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityGoodXLot: Repository<ComerGoodsXLotEntity>, entityComerLot: Repository<ComerLotsEntity>, entityComerEvent: Repository<ComerEventEntity>, logger: Logger, counter: Counter<string>);
    createThirdFile(fileName: string, eventNumber: number): Promise<{
        data: any;
        file: {
            name: string;
            base64: string;
        };
    }>;
    getGlobalParams(): Promise<number>;
    createThirdBaseFile(fileName: string, eventNumber: number, bankName: string): Promise<{
        data: any;
        file: {
            name: string;
            base64: string;
        };
    }>;
    calculateGoodPrice(params: {
        eventId: number;
        lotId: number;
    }): Promise<{
        message: string;
    }>;
    getLots(eventId: number, lotId: number): Promise<any[]>;
    getGoods(idLot: number): Promise<any[]>;
    getIdTpEvent(eventId: number): Promise<any>;
    updateComerLot(comer: UpdateComerBatchDto): Promise<false | ComerLotsEntity>;
    updateComerPropertyByLot(comer: UpdateComerGoodsXLotDto): Promise<false | ComerGoodsXLotEntity>;
}
