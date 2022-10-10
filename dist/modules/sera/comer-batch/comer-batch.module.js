"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerBatchModule = void 0;
const common_1 = require("@nestjs/common");
const comer_batch_controller_1 = require("./comer-batch.controller");
const comer_batch_service_1 = require("./comer-batch.service");
let ComerBatchModule = class ComerBatchModule {
};
ComerBatchModule = __decorate([
    (0, common_1.Module)({
        controllers: [comer_batch_controller_1.ComerBatchController],
        providers: [comer_batch_service_1.ComerBatchService]
    })
], ComerBatchModule);
exports.ComerBatchModule = ComerBatchModule;
//# sourceMappingURL=comer-batch.module.js.map