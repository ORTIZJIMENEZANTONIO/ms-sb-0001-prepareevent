"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodNotDeliveredModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const good_not_delivered_controller_1 = require("./good-not-delivered.controller");
const good_not_delivered_service_1 = require("./good-not-delivered.service");
let GoodNotDeliveredModule = class GoodNotDeliveredModule {
};
GoodNotDeliveredModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_property_by_batch_entity_1.ComerGoodsXLotEntity, comer_lot_entity_1.ComerLotEntity])],
        controllers: [good_not_delivered_controller_1.GoodNotDeliveredController],
        providers: [
            good_not_delivered_service_1.GoodNotDeliveredService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "good_not_delivered_served",
                help: "good_not_delivered_help",
            }),
        ],
    })
], GoodNotDeliveredModule);
exports.GoodNotDeliveredModule = GoodNotDeliveredModule;
//# sourceMappingURL=good-not-delivered.module.js.map