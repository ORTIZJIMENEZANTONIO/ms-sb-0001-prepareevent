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
exports.ComerAgreementEventsController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pagination_dto_1 = require("../../../shared/dto/pagination.dto");
const comer_agreement_events_dto_1 = require("./dto/comer-agreement-events.dto");
const comer_agreement_events_service_1 = require("./comer-agreement-events.service");
let ComerAgreementEventsController = class ComerAgreementEventsController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createComerConvEvent(comerEvent) {
        const zipCodeCreated = this.service.createComerConvEvent(comerEvent);
        return (zipCodeCreated !== null && zipCodeCreated !== void 0 ? zipCodeCreated : {
            statusCode: 503,
            message: "This comer conv event was not created",
            error: "Create Error",
        });
    }
    async getAllComerConvEvents({ inicio, pageSize }) {
        return await this.service.getAllComerConvEvents({ inicio, pageSize });
    }
    async getComerConvEventById(comerConvEvent) {
        return await this.service.getComerConvEventById(comerConvEvent);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createComerConvEvent" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_agreement_events_dto_1.ComerConvEventDto]),
    __metadata("design:returntype", void 0)
], ComerAgreementEventsController.prototype, "createComerConvEvent", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllComerConvEvents' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], ComerAgreementEventsController.prototype, "getAllComerConvEvents", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getComerConvEventById" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comer_agreement_events_dto_1.ComerConvEventDto]),
    __metadata("design:returntype", Promise)
], ComerAgreementEventsController.prototype, "getComerConvEventById", null);
ComerAgreementEventsController = __decorate([
    (0, common_1.Controller)("comer-agreement-events"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [comer_agreement_events_service_1.ComerAgreementEventsService,
        winston_1.Logger])
], ComerAgreementEventsController);
exports.ComerAgreementEventsController = ComerAgreementEventsController;
//# sourceMappingURL=comer-agreement-events.controller.js.map