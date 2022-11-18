"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentEventService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_catcalendar_entity_1 = require("./entities/comer-catcalendar.entity");
const comer_calendar_ev_entity_1 = require("./entities/comer-calendar-ev.entity");
const tmp_events_comer_entity_1 = require("./entities/tmp-events-comer.entity");
const comer_parameter_mod_entity_1 = require("./dto/comer-parameter-mod.entity");
const comer_events_entity_1 = require("../comer-events/entities/comer-events.entity");
comer_parameter_mod_entity_1.ComerParameterModEntity;
let CurrentEventService = class CurrentEventService {
    constructor(entityComerEvent, entityTmpEventsComer, entityComerCalendarev, entityComerParameterMod, logger, counter) {
        this.entityComerEvent = entityComerEvent;
        this.entityTmpEventsComer = entityTmpEventsComer;
        this.entityComerCalendarev = entityComerCalendarev;
        this.entityComerParameterMod = entityComerParameterMod;
        this.logger = logger;
        this.counter = counter;
    }
    async getCurrentEvents(filter) {
        const { month, year } = filter;
        const queryEvents = this.entityComerCalendarev
            .createQueryBuilder("cc")
            .select([
            `cc.year as "year"`,
            `cc.day as "day"`,
            `ccc.active as "active"`,
            `ccc.color as "color"`,
            `ccc.description as "description"`,
            `cc.idEvent as "idEvent"`,
            `cc.month as "month"`,
            `cc.daysRange as "daysRange"`,
        ])
            .leftJoin(comer_catcalendar_entity_1.ComerCatCalendarEntity, "ccc", "ccc.id = cc.idStatus")
            .where(`cc.month = ${month}`)
            .andWhere(`cc.year = ${year}`);
        return await queryEvents.getRawMany();
    }
    async spEventsInProgress() {
        const variables = {
            events: null,
            currentDays: 0,
            failDate: new Date().toLocaleDateString(),
            nowDate: new Date().toLocaleDateString(),
        };
        const eventsQuery = this.entityTmpEventsComer
            .createQueryBuilder("ev")
            .select([
            `ID_EVENTO as "idEvent"`,
            `DIRECCION as "address"`,
            `ID_TPEVENTO as "idTpevent"`,
            `FEC_FALLO as "failDate"`,
            `FECHA_EVENTO as "eventDate"`,
        ]);
        const events = await eventsQuery.getRawMany();
        for (const event of events) {
            if ((event.address == "I" && event.idTpevent == 4) ||
                (event.address == "M" && event.idTpevent == 4) ||
                (event.address == "M" && event.idTpevent == 1)) {
                const validityDate = "12/02/2024" !== null && "12/02/2024" !== void 0 ? "12/02/2024" : this.getValidityDate();
                if (variables.nowDate >= event.eventDate.toLocaleDateString() &&
                    variables.nowDate <= validityDate) {
                    variables.events = variables.events
                        ? `${event.idEvent},`
                        : `${event.idEvent}`;
                }
            }
            if (variables.events) {
                const eventsQuery = this.entityComerEvent
                    .createQueryBuilder("ce")
                    .select([`ID_EVENTO as "idEvent"`, `CVE_PROCESO as "processKey"`])
                    .where(`ID_EVENTO in (${variables.events})`);
                return await eventsQuery.getRawMany();
            }
            return null;
        }
    }
    async getValue(parameter) {
        const valueQuery = this.entityComerParameterMod
            .createQueryBuilder("cpm")
            .select([`cpm.value as "value"`])
            .where(`cpm.parameter = '${parameter}'`);
        return await valueQuery.getRawOne();
    }
    async getValidityDate() {
        return 1;
    }
};
CurrentEventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_events_entity_1.ComerEventEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(tmp_events_comer_entity_1.TmpEventsComerEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_calendar_ev_entity_1.ComerCalendarevEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(comer_parameter_mod_entity_1.ComerParameterModEntity)),
    __param(4, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(5, (0, nestjs_prometheus_1.InjectMetric)("current_event_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], CurrentEventService);
exports.CurrentEventService = CurrentEventService;
//# sourceMappingURL=current-event.service.js.map