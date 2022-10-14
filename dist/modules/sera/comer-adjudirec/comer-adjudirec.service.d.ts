import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
import { ComerAdjudirecEntity } from "./entities/comer-adjudirec.entity";
export declare class ComerAdjudirecService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerAdjudirecEntity>, logger: Logger, counter: Counter<string>);
    createComerAdjudirec(comerEvent: ComerAdjudirecDto): Promise<(ComerAdjudirecDto & ComerAdjudirecEntity) | {
        error: any;
    }>;
    getAllComersAdjudirec(pagination: PaginationDto): Promise<{
        data: ComerAdjudirecEntity[];
        count: number;
    }>;
    updateComerAdjudirec(): Promise<void>;
    deleteComerAdjudirec(comer: ComerAdjudirecDto): Promise<import("typeorm").DeleteResult>;
}
