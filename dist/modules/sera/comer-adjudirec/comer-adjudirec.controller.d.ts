import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
import { ComerAdjudirecService } from "./comer-adjudirec.service";
export declare class ComerAdjudirecController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerAdjudirecService, logger: Logger);
    createComerAdjudirec(comerEvent: ComerAdjudirecDto): Promise<(ComerAdjudirecDto & import("./entities/comer-adjudirec.entity").ComerAdjudirecEntity) | {
        error: any;
    }>;
    getAllComersAdjudirec({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-adjudirec.entity").ComerAdjudirecEntity[];
        count: number;
    }>;
}
