import { Logger } from "winston";
import { MandateFunctionService } from "./mandate-function.service";
import { MandateFunctionDto } from "./dto/mandate-function.dto";
export declare class MandateFunctionController {
    private readonly service;
    private readonly logger;
    constructor(service: MandateFunctionService, logger: Logger);
    updateMandate(params: MandateFunctionDto): Promise<{
        success: boolean;
    }>;
}
