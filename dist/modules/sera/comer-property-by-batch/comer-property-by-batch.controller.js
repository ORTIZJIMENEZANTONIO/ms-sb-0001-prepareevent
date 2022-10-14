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
exports.ComerPropertyByBatchController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_property_by_batch_service_1 = require("./comer-property-by-batch.service");
const comer_property_by_batch_dto_1 = require("./dto/comer-property-by-batch.dto");
let ComerPropertyByBatchController = class ComerPropertyByBatchController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerGoodXLot(comerEvent) {
        return this.service.createComerGoodXLot(comerEvent);
    }
    async getAllComerGoodXLots({ inicio, pageSize }) {
        return await this.service.getAllComerGoodXLots({ inicio, pageSize });
    }
    async getComerXLotByLotId(comerEvent) {
        return await this.service.getComerXLotByLotId(comerEvent);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerGoodXLot" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_property_by_batch_dto_1.ComerGoodsXLotDto]),
    __metadata("design:returntype", void 0)
], ComerPropertyByBatchController.prototype, "createComerGoodXLot", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllComerGoodXLots' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerPropertyByBatchController.prototype, "getAllComerGoodXLots", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerXLotByLotId" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerPropertyByBatchController.prototype, "getComerXLotByLotId", null);
ComerPropertyByBatchController = __decorate([
    (0, common_1.Controller)('comer-property-by-batch'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_property_by_batch_service_1.ComerPropertyByBatchService,
        winston_1.Logger])
], ComerPropertyByBatchController);
exports.ComerPropertyByBatchController = ComerPropertyByBatchController;
//# sourceMappingURL=comer-property-by-batch.controller.js.map