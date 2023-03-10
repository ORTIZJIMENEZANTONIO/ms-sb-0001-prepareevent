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
exports.ComerRejectedPropertyController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_rejected_property_dto_1 = require("./dto/comer-rejected-property.dto");
const comer_rejected_property_service_1 = require("./comer-rejected-property.service");
let ComerRejectedPropertyController = class ComerRejectedPropertyController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerRejectedProperty(comerEvent) {
        return this.service.createComerRejectedProperty(comerEvent);
    }
    async getAllComersRejectedProperties(pagination) {
        return await this.service.getAllComersRejectedProperties(pagination);
    }
    async getComerRejectedPropertyByEventId(comer) {
        return await this.service.getComerRejectedPropertyByEventId(comer);
    }
    async deleteComerRejectedProperty(comer) {
        const { affected } = await this.service.deleteComerRejectedProperty(comer);
        return affected == 0
            ? {
                statusCode: 404,
                message: "Comer rejected not found",
                error: "Not found",
            }
            : { statusCode: 200, message: "Successfully deleted" };
    }
    async updateComerRejectedProperty(body) {
        const comer = Object.assign({}, body);
        const { rejectedGoodIdToUpdt } = body;
        const affected = await this.service.updateComerRejectedProperty({ rejectedGoodIdToUpdt }, comer);
        return affected
            ? {
                statusCode: 404,
                message: "Comer rejected not found",
                error: "Not found",
            }
            : { statusCode: 200, message: "Successfully deleted" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerRejectedProperty" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_rejected_property_dto_1.ComerRejectedGoodDto]),
    __metadata("design:returntype", void 0)
], ComerRejectedPropertyController.prototype, "createComerRejectedProperty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getAllComersRejectedProperties" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "getAllComersRejectedProperties", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerRejectedPropertyByEventId" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "getComerRejectedPropertyByEventId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "deleteComerRejectedProperty" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_rejected_property_dto_1.ComerRejectedGoodDto]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "deleteComerRejectedProperty", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "updateComerRejectedProperty" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComerRejectedPropertyController.prototype, "updateComerRejectedProperty", null);
ComerRejectedPropertyController = __decorate([
    (0, common_1.Controller)("comer-rejected-property"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_rejected_property_service_1.ComerRejectedPropertyService,
        winston_1.Logger])
], ComerRejectedPropertyController);
exports.ComerRejectedPropertyController = ComerRejectedPropertyController;
//# sourceMappingURL=comer-rejected-property.controller.js.map