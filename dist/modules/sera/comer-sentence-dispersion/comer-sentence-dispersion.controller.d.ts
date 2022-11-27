import { Logger } from "winston";
import { ComerSentenceDispersionService } from "./comer-sentence-dispersion.service";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
export declare class ComerSentenceDispersionController {
    private readonly service;
    private readonly logger;
    constructor(service: ComerSentenceDispersionService, logger: Logger);
    setSentenceDispersion(params: SentenceDispersionDto): Promise<any>;
}
