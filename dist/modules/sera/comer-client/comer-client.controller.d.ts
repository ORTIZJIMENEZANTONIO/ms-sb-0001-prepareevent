import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";
import { ComerClientService } from "./comer-client.service";
export declare class ComerClientController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerClientService, logger: Logger);
    createComerClient(comerClient: ComerClientDto): Promise<ComerClientDto & import("./entities/comer-client.entity").ComerClientEntity> | {
        statusCode: number;
        message: string;
        error: string;
    };
    getAllComersClient({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-client.entity").ComerClientEntity[];
        count: number;
    }>;
}
