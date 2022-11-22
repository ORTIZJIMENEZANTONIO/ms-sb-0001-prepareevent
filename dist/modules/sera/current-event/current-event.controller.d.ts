import { Logger } from "winston";
import { CurrentEventService } from "./current-event.service";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
export declare class CurrentEventController {
    private readonly service;
    private readonly logger;
    constructor(service: CurrentEventService, logger: Logger);
    getCurrentEvents(params: CurrentFilterDto): Promise<any[]>;
    spEventsInProgress(): Promise<any[]>;
}
