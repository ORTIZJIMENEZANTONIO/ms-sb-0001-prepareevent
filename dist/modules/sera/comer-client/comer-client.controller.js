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
exports.ComerClientController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_client_dto_1 = require("./dto/comer-client.dto.");
const comer_client_service_1 = require("./comer-client.service");
let ComerClientController = class ComerClientController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerClient(comerClient) {
        return this.service.createComerClient(comerClient);
    }
    async getAllComersClient({ inicio, pageSize }) {
        return await this.service.getAllComersClient({ inicio, pageSize });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerClient" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_client_dto_1.ComerClientDto]),
    __metadata("design:returntype", void 0)
], ComerClientController.prototype, "createComerClient", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllComersClient' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerClientController.prototype, "getAllComersClient", null);
ComerClientController = __decorate([
    (0, common_1.Controller)('comer-client'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_client_service_1.ComerClientService,
        winston_1.Logger])
], ComerClientController);
exports.ComerClientController = ComerClientController;
//# sourceMappingURL=comer-client.controller.js.map