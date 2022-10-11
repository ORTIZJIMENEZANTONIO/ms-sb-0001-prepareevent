"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerRejectedPropertyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_rejected_property_service_1 = require("./comer-rejected-property.service");
const comer_rejected_property_controller_1 = require("./comer-rejected-property.controller");
const comer_rejected_property_entity_1 = require("./entities/comer-rejected-property.entity");
let ComerRejectedPropertyModule = class ComerRejectedPropertyModule {
};
ComerRejectedPropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_rejected_property_entity_1.ComerRejectedPropertyEntity])],
        controllers: [comer_rejected_property_controller_1.ComerRejectedPropertyController],
        providers: [
            comer_rejected_property_service_1.ComerRejectedPropertyService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_rejected_property_served",
                help: "comer_rejected_property_help",
            }),
        ],
    })
], ComerRejectedPropertyModule);
exports.ComerRejectedPropertyModule = ComerRejectedPropertyModule;
//# sourceMappingURL=comer-rejected-property.module.js.map