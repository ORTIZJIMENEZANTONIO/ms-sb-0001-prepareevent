import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientEntity } from "./entities/comer-client.entity";
import { ComerClientDto } from "./dto/comer-client.dto.";
export declare class ComerClientService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerClientEntity>, logger: Logger, counter: Counter<string>);
    createComerClient(comer: ComerClientDto): Promise<(ComerClientDto & ComerClientEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComersClient({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerClientEntity[];
        count: number;
    }>;
    updateComerClient(): Promise<void>;
    deleteComerClient(comer: ComerClientDto): Promise<import("typeorm").DeleteResult>;
}
