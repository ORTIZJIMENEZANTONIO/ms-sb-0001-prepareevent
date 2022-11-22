"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerEventsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_events_controller_1 = require("./comer-events.controller");
const comer_events_service_1 = require("./comer-events.service");
const comer_event_entity_1 = require("./entities/comer-event.entity");
let ComerEventsModule = class ComerEventsModule {
};
ComerEventsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_event_entity_1.ComerEventEntity])],
        controllers: [comer_events_controller_1.ComerEventsController],
        providers: [
            comer_events_service_1.ComerEventsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_event_served",
                help: "comer_event_help",
            }),
        ]
    })
], ComerEventsModule);
exports.ComerEventsModule = ComerEventsModule;
//# sourceMappingURL=comer-events.module.js.map