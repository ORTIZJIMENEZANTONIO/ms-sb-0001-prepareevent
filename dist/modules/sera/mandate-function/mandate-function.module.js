"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateFunctionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const mandate_function_service_1 = require("./mandate-function.service");
const mandate_function_controller_1 = require("./mandate-function.controller");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const comer_batch_entity_1 = require("../comer-batch/entities/comer-batch.entity");
let MandateFunctionModule = class MandateFunctionModule {
};
MandateFunctionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_property_by_batch_entity_1.ComerGoodsXLotEntity, comer_batch_entity_1.ComerLotsEntity])],
        controllers: [mandate_function_controller_1.MandateFunctionController],
        providers: [
            mandate_function_service_1.MandateFunctionService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "mandate_function_served",
                help: "mandate_function_help",
            }),
        ],
    })
], MandateFunctionModule);
exports.MandateFunctionModule = MandateFunctionModule;
//# sourceMappingURL=mandate-function.module.js.map