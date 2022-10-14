import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";
export declare class ComerRejectedPropertyService {
    private entity;
    private readonly logger;
    counter: Counter<string>;
    constructor(entity: Repository<ComerRejectedPropertyEntity>, logger: Logger, counter: Counter<string>);
    createComerRejectedProperty(comerRejected: ComerRejectedGoodDto): Promise<ComerRejectedGoodDto & ComerRejectedPropertyEntity>;
    getAllComersRejectedProperties({ inicio, pageSize }: PaginationDto): Promise<{
        data: ComerRejectedPropertyEntity[];
        count: number;
    }>;
    getComerRejectedPropertyById(id: number): Promise<ComerRejectedPropertyEntity>;
    deleteComerRejectedProperty(rejectedGoodId: number): Promise<import("typeorm").DeleteResult>;
}
