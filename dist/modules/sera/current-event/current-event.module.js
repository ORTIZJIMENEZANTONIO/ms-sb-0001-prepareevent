"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentEventModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
const current_event_controller_1 = require("./current-event.controller");
const current_event_service_1 = require("./current-event.service");
const comer_parameter_mod_entity_1 = require("./dto/comer-parameter-mod.entity");
const comer_calendar_ev_entity_1 = require("./entities/comer-calendar-ev.entity");
const comer_catcalendar_entity_1 = require("./entities/comer-catcalendar.entity");
const tmp_events_comer_entity_1 = require("./entities/tmp-events-comer.entity");
let CurrentEventModule = class CurrentEventModule {
};
CurrentEventModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                comer_catcalendar_entity_1.ComerCatCalendarEntity,
                comer_calendar_ev_entity_1.ComerCalendarevEntity,
                tmp_events_comer_entity_1.TmpEventsComerEntity,
                comer_parameter_mod_entity_1.ComerParameterModEntity,
                comer_event_entity_1.ComerEventEntity,
            ]),
        ],
        controllers: [current_event_controller_1.CurrentEventController],
        providers: [
            current_event_service_1.CurrentEventService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "current_event_served",
                help: "current_event_help",
            }),
        ],
    })
], CurrentEventModule);
exports.CurrentEventModule = CurrentEventModule;
//# sourceMappingURL=current-event.module.js.map