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
exports.CurrentEventController = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const microservices_1 = require("@nestjs/microservices");
const current_event_service_1 = require("./current-event.service");
const current_ifilter_dto_1 = require("./dto/current-ifilter.dto");
let CurrentEventController = class CurrentEventController {
    constructor(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    async getCurrentEvents(params) {
        const events = await this.service.getCurrentEvents(params);
        return events !== null && events !== void 0 ? events : { statusCode: 404, message: "Data not found" };
    }
    async spEventsInProgress() {
        const events = await this.service.spEventsInProgress();
        return events !== null && events !== void 0 ? events : { statusCode: 404, message: "Data not found" };
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "getCurrentEvents" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_ifilter_dto_1.CurrentFilterDto]),
    __metadata("design:returntype", Promise)
], CurrentEventController.prototype, "getCurrentEvents", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: "spEventsInProgress" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrentEventController.prototype, "spEventsInProgress", null);
CurrentEventController = __decorate([
    (0, common_1.Controller)("current-event"),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [current_event_service_1.CurrentEventService,
        winston_1.Logger])
], CurrentEventController);
exports.CurrentEventController = CurrentEventController;
//# sourceMappingURL=current-event.controller.js.map