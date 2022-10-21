import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";
import { UpdateComerRejectedGoodDto } from "./dto/update-comer-rejected-property.dto";
export declare class ComerRejectedPropertyService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerRejectedPropertyEntity>, logger: Logger, counter: Counter<string>);
    createComerRejectedProperty(comer: ComerRejectedGoodDto): Promise<(ComerRejectedGoodDto & ComerRejectedPropertyEntity) | {
        statusCode: number;
        message: string;
    }>;
    getAllComersRejectedProperties(pagination: PaginationDto): Promise<{
        data: ComerRejectedPropertyEntity[];
        count: number;
    }>;
    getComerRejectedPropertyById(comer: ComerRejectedGoodDto): Promise<{
        data: ComerRejectedPropertyEntity[];
        count: number;
    }>;
    getComerRejectedPropertyByEventId(comer: PaginationDto & ComerRejectedGoodDto): Promise<{
        data: ComerRejectedPropertyEntity[];
        count: number;
    }>;
    updateComerRejectedProperty({ rejectedGoodIdToUpdt }: UpdateComerRejectedGoodDto, comer: ComerRejectedGoodDto): Promise<ComerRejectedPropertyEntity>;
    deleteComerRejectedProperty(comerRejected: ComerRejectedGoodDto): Promise<import("typeorm").DeleteResult>;
}
