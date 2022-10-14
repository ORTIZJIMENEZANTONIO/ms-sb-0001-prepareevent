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
exports.ComerAdjudirecController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_adjudirec_dto_1 = require("./dto/comer-adjudirec.dto");
const comer_adjudirec_service_1 = require("./comer-adjudirec.service");
let ComerAdjudirecController = class ComerAdjudirecController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async createComerAdjudirec(comerEvent) {
        return await this.service.createComerAdjudirec(comerEvent);
    }
    async getAllComersAdjudirec({ inicio, pageSize }) {
        return await this.service.getAllComersAdjudirec({ inicio, pageSize });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerAdjudirec" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_adjudirec_dto_1.ComerAdjudirecDto]),
    __metadata("design:returntype", Promise)
], ComerAdjudirecController.prototype, "createComerAdjudirec", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllComersAdjudirec' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerAdjudirecController.prototype, "getAllComersAdjudirec", null);
ComerAdjudirecController = __decorate([
    (0, common_1.Controller)("comer-adjudirec"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_adjudirec_service_1.ComerAdjudirecService,
        winston_1.Logger])
], ComerAdjudirecController);
exports.ComerAdjudirecController = ComerAdjudirecController;
//# sourceMappingURL=comer-adjudirec.controller.js.map