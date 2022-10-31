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
exports.PaProcessController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const pa_process_service_1 = require("./pa-process.service");
const reject_dto_1 = require("./dto/reject.dto");
const remmitance_prep_by_good_dto_1 = require("./dto/remmitance-prep-by-good.dto");
let PaProcessController = class PaProcessController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async paReject(comer) {
        return await this.service.paReject(comer);
    }
    async paRemittancePrepByGood(comer) {
        return await this.service.paRemittancePrepByGood(comer);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "paReject" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reject_dto_1.PaRejectDto]),
    __metadata("design:returntype", Promise)
], PaProcessController.prototype, "paReject", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "paRemittancePrepByGood" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remmitance_prep_by_good_dto_1.RemittancePrepByGoodDto]),
    __metadata("design:returntype", Promise)
], PaProcessController.prototype, "paRemittancePrepByGood", null);
PaProcessController = __decorate([
    (0, common_1.Controller)("pa-process"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [pa_process_service_1.PaProcessService,
        winston_1.Logger])
], PaProcessController);
exports.PaProcessController = PaProcessController;
//# sourceMappingURL=pa-process.controller.js.map