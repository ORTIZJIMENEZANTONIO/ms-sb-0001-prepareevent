import { Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Counter } from "prom-client";
import { ComerCalendarevEntity } from "./entities/comer-calendar-ev.entity";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";
import { TmpEventsComerEntity } from "./entities/tmp-events-comer.entity";
import { ComerParameterModEntity } from "./dto/comer-parameter-mod.entity";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
export declare class CurrentEventService {
    private entityComerEvent;
    private entityTmpEventsComer;
    private entityComerCalendarev;
    private entityComerParameterMod;
    private readonly logger;
    counter: Counter<string>;
    constructor(entityComerEvent: Repository<ComerEventEntity>, entityTmpEventsComer: Repository<TmpEventsComerEntity>, entityComerCalendarev: Repository<ComerCalendarevEntity>, entityComerParameterMod: Repository<ComerParameterModEntity>, logger: Logger, counter: Counter<string>);
    getCurrentEvents(filter: CurrentFilterDto): Promise<any[]>;
    spEventsInProgress(): Promise<any[]>;
    getValue(parameter: string): Promise<any>;
    getValidityDate(): Promise<number>;
}
