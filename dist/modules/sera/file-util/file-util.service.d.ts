import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { UpdateComerLotDto } from "../comer-lot/dto/update-comer-lot.dto";
import { UpdateComerGoodsXLotDto } from "../comer-property-by-batch/dto/update-comer-property-by-batch.dto";
export declare class FileUtilService {
    private entityGoodXLot;
    private entityComerLot;
    private entityComerEvent;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityGoodXLot: Repository<ComerGoodsXLotEntity>, entityComerLot: Repository<ComerLotEntity>, entityComerEvent: Repository<ComerEventEntity>, logger: Logger, counter: Counter<string>);
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
    updateComerLot(comer: UpdateComerLotDto): Promise<false | ComerLotEntity>;
    updateComerPropertyByLot(comer: UpdateComerGoodsXLotDto): Promise<false | ComerGoodsXLotEntity>;
}
