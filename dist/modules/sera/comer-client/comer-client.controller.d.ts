import { Logger } from "winston";
import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";
import { ComerClientService } from "./comer-client.service";
export declare class ComerClientController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerClientService, logger: Logger);
    createComerClient(comerClient: ComerClientDto): Promise<(ComerClientDto & import("./entities/comer-client.entity").ComerClientEntity) | {
        error: any;
    }>;
    getAllComersClient({ inicio, pageSize }: PaginationDto): Promise<{
        data: import("./entities/comer-client.entity").ComerClientEntity[];
        count: number;
    }>;
    deleteComerClient(comer: ComerClientDto): Promise<{
        statusCode: number;
        message: string;
        error: string;
    } | {
        statusCode: number;
        message: string;
        error?: undefined;
    }>;
}
