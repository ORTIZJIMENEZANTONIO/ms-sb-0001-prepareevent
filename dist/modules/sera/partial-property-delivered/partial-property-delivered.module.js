"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialPropertyDeliveredModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const partial_property_delivered_controller_1 = require("./partial-property-delivered.controller");
const partial_property_delivered_service_1 = require("./partial-property-delivered.service");
let PartialPropertyDeliveredModule = class PartialPropertyDeliveredModule {
};
PartialPropertyDeliveredModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_property_by_batch_entity_1.ComerGoodsXLotEntity])],
        controllers: [partial_property_delivered_controller_1.PartialPropertyDeliveredController],
        providers: [
            partial_property_delivered_service_1.PartialPropertyDeliveredService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "partial_property_delivered_served",
                help: "partial_property_delivered_help",
            }),
        ],
    })
], PartialPropertyDeliveredModule);
exports.PartialPropertyDeliveredModule = PartialPropertyDeliveredModule;
//# sourceMappingURL=partial-property-delivered.module.js.map