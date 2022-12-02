"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerSentenceDispersionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_parameter_mod_entity_1 = require("../current-event/entities/comer-parameter-mod.entity");
const comer_sentence_dispersion_controller_1 = require("./comer-sentence-dispersion.controller");
const comer_sentence_dispersion_service_1 = require("./comer-sentence-dispersion.service");
const comer_payment_ref_entity_1 = require("./entities/comer-payment-ref.entity");
let ComerSentenceDispersionModule = class ComerSentenceDispersionModule {
};
ComerSentenceDispersionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                comer_event_entity_1.ComerEventEntity,
                comer_payment_ref_entity_1.ComerPaymentReferenceEntity,
                comer_lot_entity_1.ComerLotEntity,
                comer_parameter_mod_entity_1.ComerParameterModEntity
            ]),
        ],
        controllers: [comer_sentence_dispersion_controller_1.ComerSentenceDispersionController],
        providers: [comer_sentence_dispersion_service_1.ComerSentenceDispersionService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_sentence_served",
                help: "comer_sentence_help",
            }),]
    })
], ComerSentenceDispersionModule);
exports.ComerSentenceDispersionModule = ComerSentenceDispersionModule;
//# sourceMappingURL=comer-sentence-dispersion.module.js.map