import { Logger } from "winston";
import { PaProcessService } from "./pa-process.service";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";
export declare class PaProcessController {
    private readonly service;
    private readonly logger;
    constructor(service: PaProcessService, logger: Logger);
    paReject(comer: PaRejectDto): Promise<{
        created: number;
        createdErrors: number;
        updated: number;
        updatedErrors: number;
    }>;
    paRemittancePrepByGood(comer: RemittancePrepByGoodDto): Promise<{
        created: number;
        createdErrors: number;
        updated: number;
        updatedErrors: number;
    }>;
    paChangeStatusValidate(comer: ChangeStatusValidateDto): Promise<{}>;
}
