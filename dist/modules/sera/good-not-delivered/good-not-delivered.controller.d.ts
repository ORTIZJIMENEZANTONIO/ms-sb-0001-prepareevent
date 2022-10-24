import { Logger } from "winston";
import { GoodNotDeliveredService } from "./good-not-delivered.service";
export declare class GoodNotDeliveredController {
    private readonly service;
    private readonly logger;
    constructor(service: GoodNotDeliveredService, logger: Logger);
}
