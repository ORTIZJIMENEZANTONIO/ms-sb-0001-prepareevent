import { Logger } from "winston";
import { GoodNotDeliveredService } from "./good-not-delivered.service";
import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";
export declare class GoodNotDeliveredController {
    private readonly service;
    private readonly logger;
    constructor(service: GoodNotDeliveredService, logger: Logger);
    updateGoodNotDeliveredToTheCanceledLot(comer: GoodNotDeliveredDto): Promise<{
        statusCode?: undefined;
        message?: undefined;
    } | {
        statusCode: number;
        message: string;
    }>;
}
