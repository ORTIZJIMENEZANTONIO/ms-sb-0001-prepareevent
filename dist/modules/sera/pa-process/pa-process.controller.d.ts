import { Logger } from "winston";
import { PaProcessService } from "./pa-process.service";
import { PaRejectDto } from "./dto/reject.dto";
export declare class PaProcessController {
    private readonly service;
    private readonly logger;
    constructor(service: PaProcessService, logger: Logger);
    paReject(comer: PaRejectDto): Promise<void>;
}
