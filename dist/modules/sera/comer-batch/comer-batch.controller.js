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
exports.ComerBatchController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_batch_dto_1 = require("./dto/comer-batch.dto");
const comer_batch_service_1 = require("./comer-batch.service");
let ComerBatchController = class ComerBatchController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerLot(comerEvent) {
        return this.service.createComerLot(comerEvent);
    }
    async getAllComersLot(pagination) {
        return await this.service.getAllComersLot(pagination);
    }
    async getComerLotByEventId(comer) {
        return await this.service.getComerLotByEventId(comer);
    }
    async deleteComerLot(comer) {
        const { affected } = await this.service.deleteComerLot(comer);
        return affected == 0
            ? {
                statusCode: 404,
                message: "ComerConvEvent not found",
                error: "Not found",
            }
            : { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerLot" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_batch_dto_1.ComerLotsDto]),
    __metadata("design:returntype", void 0)
], ComerBatchController.prototype, "createComerLot", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllComersLot' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "getAllComersLot", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getComerLotByEventId' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "getComerLotByEventId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "deleteComerLot" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_batch_dto_1.ComerLotsDto]),
    __metadata("design:returntype", Promise)
], ComerBatchController.prototype, "deleteComerLot", null);
ComerBatchController = __decorate([
    (0, common_1.Controller)('comer-batch'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_batch_service_1.ComerBatchService,
        winston_1.Logger])
], ComerBatchController);
exports.ComerBatchController = ComerBatchController;
//# sourceMappingURL=comer-batch.controller.js.map