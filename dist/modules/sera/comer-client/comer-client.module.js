"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerClientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_client_controller_1 = require("./comer-client.controller");
const comer_client_service_1 = require("./comer-client.service");
const comer_client_entity_1 = require("./entities/comer-client.entity");
let ComerClientModule = class ComerClientModule {
};
ComerClientModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comer_client_entity_1.ComerClientEntity])],
        controllers: [comer_client_controller_1.ComerClientController],
        providers: [
            comer_client_service_1.ComerClientService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "comer_client_served",
                help: "comer_client_help",
            }),
        ]
    })
], ComerClientModule);
exports.ComerClientModule = ComerClientModule;
//# sourceMappingURL=comer-client.module.js.map