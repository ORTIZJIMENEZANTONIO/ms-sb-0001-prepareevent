"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerPropertyByBatchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_property_by_batch_controller_1 = require("./comer-property-by-batch.controller");
const comer_property_by_batch_service_1 = require("./comer-property-by-batch.service");
const comer_property_by_batch_entity_1 = require("./entities/comer-property-by-batch.entity");
let ComerPropertyByBatchModule = class ComerPropertyByBatchModule {
};
ComerPropertyByBatchModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_property_by_batch_entity_1.ComerPropertyByBatchEntity])],
        controllers: [comer_property_by_batch_controller_1.ComerPropertyByBatchController],
        providers: [
            comer_property_by_batch_service_1.ComerPropertyByBatchService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_proeprt_by_batch_served",
                help: "comer_proeprt_by_batch_help",
            }),
        ]
    })
], ComerPropertyByBatchModule);
exports.ComerPropertyByBatchModule = ComerPropertyByBatchModule;
//# sourceMappingURL=comer-property-by-batch.module.js.map