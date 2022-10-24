import { Logger } from "winston";
import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";
export declare class PartialPropertyDeliveredController {
    private readonly service;
    private readonly logger;
    constructor(service: PartialPropertyDeliveredService, logger: Logger);
}
