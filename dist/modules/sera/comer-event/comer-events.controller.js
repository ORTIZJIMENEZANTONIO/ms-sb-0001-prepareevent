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
exports.ComerEventsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_events_service_1 = require("./comer-events.service");
const comer_events_dto_1 = require("./dto/comer-events.dto");
const update_comer_events_entity_1 = require("./dto/update-comer-events.entity");
let ComerEventsController = class ComerEventsController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async createComerEvent(comerEvent) {
        return await this.service.createComerEvent(comerEvent);
    }
    async getAllComerEvents(pagination) {
        return await this.service.getAllComerEvents(pagination);
    }
    async getComerEventByAddress(comerEvent) {
        return await this.service.getComerEventByAddress(comerEvent);
    }
    async getComerEventByAddressAndId(comerEvent) {
        return await this.service.getComerEventByAddressAndId(comerEvent);
    }
    async getComerEventByTpEvent(comerEvent) {
        return await this.service.getComerEventByTpEvent(comerEvent);
    }
    async deleteComerEvent(comer) {
        const { affected } = await this.service.deleteComerEvent(comer);
        return affected == 0
            ? {
                statusCode: 404,
                message: "ComerEvent not found",
                error: "Not found",
            }
            : { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerEvent" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_events_dto_1.ComerEventDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "createComerEvent", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getAllComerEvents" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getAllComerEvents", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerEventByAddress" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByAddress", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerEventByAddressAndId" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_comer_events_entity_1.UpdateComerEventDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByAddressAndId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerEventByTpEvent" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "getComerEventByTpEvent", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "deleteComerEvent" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_events_dto_1.ComerEventDto]),
    __metadata("design:returntype", Promise)
], ComerEventsController.prototype, "deleteComerEvent", null);
ComerEventsController = __decorate([
    (0, common_1.Controller)("comer-events"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_events_service_1.ComerEventsService,
        winston_1.Logger])
], ComerEventsController);
exports.ComerEventsController = ComerEventsController;
//# sourceMappingURL=comer-events.controller.js.map