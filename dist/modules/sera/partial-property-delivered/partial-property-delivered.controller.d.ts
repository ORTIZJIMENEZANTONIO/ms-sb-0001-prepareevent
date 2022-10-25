import { Logger } from "winston";
import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";
import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";
export declare class PartialPropertyDeliveredController {
    private readonly service;
    private readonly logger;
    constructor(service: PartialPropertyDeliveredService, logger: Logger);
    createNewPartialGood(comer: PartialPropertyDelivered): Promise<any>;
}
