"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatmentOfPartialReturnsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const treatment_of_partial_returns_service_1 = require("./treatment-of-partial-returns.service");
let TreatmentOfPartialReturnsController = class TreatmentOfPartialReturnsController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerGoodXLot(comer) {
        return this.service.treatmentOfPartialReturns(comer);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "treatmentOfPartialReturns" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreatmentOfPartialReturnsController.prototype, "createComerGoodXLot", null);
TreatmentOfPartialReturnsController = __decorate([
    (0, common_1.Controller)("treatment-of-partial-returns"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [treatment_of_partial_returns_service_1.TreatmentOfPartialReturnsService,
        winston_1.Logger])
], TreatmentOfPartialReturnsController);
exports.TreatmentOfPartialReturnsController = TreatmentOfPartialReturnsController;
//# sourceMappingURL=treatment-of-partial-returns.controller.js.map