"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentOfPartialReturnsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_batch_service_1 = require("../comer-lot/comer-batch.service");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_property_by_lot_entity_1 = require("../comer-property-by-lot/entities/comer-property-by-lot.entity");
const good_not_delivered_service_1 = require("../good-not-delivered/good-not-delivered.service");
const partial_property_delivered_service_1 = require("../partial-property-delivered/partial-property-delivered.service");
const good_partial_delivery_entity_1 = require("./entities/good-partial-delivery.entity");
const treatment_of_partial_returns_controller_1 = require("./treatment-of-partial-returns.controller");
const treatment_of_partial_returns_service_1 = require("./treatment-of-partial-returns.service");
let TreatmentOfPartialReturnsModule = class TreatmentOfPartialReturnsModule {
};
TreatmentOfPartialReturnsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                comer_property_by_lot_entity_1.ComerGoodsXLotEntity,
                comer_lot_entity_1.ComerLotEntity,
                good_partial_delivery_entity_1.GoodPartialDeliveryEntity
            ]),
        ],
        controllers: [treatment_of_partial_returns_controller_1.TreatmentOfPartialReturnsController],
        providers: [
            treatment_of_partial_returns_service_1.TreatmentOfPartialReturnsService,
            partial_property_delivered_service_1.PartialPropertyDeliveredService,
            good_not_delivered_service_1.GoodNotDeliveredService,
            comer_batch_service_1.ComerLotService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "treatment_of_partial_returns_served",
                help: "treatment_of_partial_returns_help",
            }),
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "partial_property_delivered_served",
                help: "partial_property_delivered_help",
            }),
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "good_not_delivered_served",
                help: "good_not_delivered_help",
            }),
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_lot_served",
                help: "comer_lot_help",
            }),
        ],
    })
], TreatmentOfPartialReturnsModule);
exports.TreatmentOfPartialReturnsModule = TreatmentOfPartialReturnsModule;
//# sourceMappingURL=treatment-of-partial-returns.module.js.map