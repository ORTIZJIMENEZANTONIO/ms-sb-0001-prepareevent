import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerCalendarevEntity } from "./entities/comer-calendar-ev.entity";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
import { TmpEventsComerEntity } from "./entities/tmp-events-comer.entity";
export declare class CurrentEventService {
    private entityTmpEventsComer;
    private entityComerCalendarev;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityTmpEventsComer: Repository<TmpEventsComerEntity>, entityComerCalendarev: Repository<ComerCalendarevEntity>, logger: Logger, counter: Counter<string>);
    getCurrentEvents(filter: CurrentFilterDto): Promise<any[]>;
    spEventsInProgress(): Promise<any[]>;
}
