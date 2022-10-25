import { Logger } from "winston";
import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";
export declare class TreatmentOfPartialReturnsController {
    private readonly service;
    private readonly logger;
    constructor(service: TreatmentOfPartialReturnsService, logger: Logger);
    treatmentOfPartialReturns(goodNumber: number): Promise<{
        cruds: any[];
    }>;
}
