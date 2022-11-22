"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerAgreementEventsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_agreement_events_service_1 = require("./comer-agreement-events.service");
const comer_agreement_events_controller_1 = require("./comer-agreement-events.controller");
const comer_agreement_events_entity_1 = require("./entities/comer-agreement-events.entity");
let ComerAgreementEventsModule = class ComerAgreementEventsModule {
};
ComerAgreementEventsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_agreement_events_entity_1.ComerConvEventEntity])],
        controllers: [comer_agreement_events_controller_1.ComerAgreementEventsController],
        providers: [
            comer_agreement_events_service_1.ComerAgreementEventsService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_conv_event_served",
                help: "comer_conv_event_help",
            }),
        ],
    })
], ComerAgreementEventsModule);
exports.ComerAgreementEventsModule = ComerAgreementEventsModule;
//# sourceMappingURL=comer-agreement-events.module.js.map