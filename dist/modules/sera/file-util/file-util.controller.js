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
exports.FileUtilController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const file_util_service_1 = require("./file-util.service");
let FileUtilController = class FileUtilController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    createXlsx() {
        const file = this.service.makeFile("hi", "name");
        return file !== null && file !== void 0 ? file : { statusCode: 400, message: "File failed" };
    }
    createThirdFile(params) {
        const file = this.service.createThirdFile(params.fileName, params.eventId);
        return file !== null && file !== void 0 ? file : { statusCode: 400, message: "File failed" };
    }
    calculateGoodPrice(params) {
        const file = this.service.calculateGoodPrice(params);
        return file !== null && file !== void 0 ? file : { statusCode: 400, message: "File failed" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createXlsx" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileUtilController.prototype, "createXlsx", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "createThirdFile" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUtilController.prototype, "createThirdFile", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "calculateGoodPrice" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileUtilController.prototype, "calculateGoodPrice", null);
FileUtilController = __decorate([
    (0, common_1.Controller)("file-util"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [file_util_service_1.FileUtilService,
        winston_1.Logger])
], FileUtilController);
exports.FileUtilController = FileUtilController;
//# sourceMappingURL=file-util.controller.js.map