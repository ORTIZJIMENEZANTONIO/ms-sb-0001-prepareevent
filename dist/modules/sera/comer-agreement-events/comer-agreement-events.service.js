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
exports.ComerAgreementEventsService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_agreement_events_entity_1 = require("./entities/comer-agreement-events.entity");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
let ComerAgreementEventsService = class ComerAgreementEventsService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async createComerConvEvent(comer) {
        const comerExisting = await this.entity.findOneBy({
            eventId: comer.eventId,
            announcementEventId: comer.announcementEventId,
        });
        if (comerExisting) {
            return {
                statusCode: 501,
                message: "ComerConvEvent existing",
            };
        }
        return await this.entity.save(comer);
    }
    async getAllComerConvEvents(pagination) {
        var _a, _b;
        this.counter.inc();
        const { inicio = 1, pageSize = 10 } = pagination;
        const result = await this.entity
            .createQueryBuilder("ccv")
            .innerJoinAndMapOne("ccv.eventId", comer_event_entity_1.ComerEventEntity, "ce", "ccv.eventId = ce.eventId")
            .orderBy({ "ccv.announcementEventId": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerConvEventById({ eventId }) {
        return await this.entity.findOneBy({ eventId });
    }
    async updateComerConvEvent({ eventIdToUpdt, announcementEventIdToUpdt }, comer) {
        const data = await this.entity.findOneBy({
            eventId: eventIdToUpdt,
            announcementEventId: announcementEventIdToUpdt,
        });
        if (data) {
            delete comer.eventId;
            delete comer.announcementEventId;
            this.entity.merge(data, comer);
            return this.entity.save(data);
        }
        return null;
    }
    async deleteComerConvEvent(comer) {
        const { eventId, announcementEventId } = comer;
        return await this.entity.delete({ eventId, announcementEventId });
    }
};
ComerAgreementEventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_agreement_events_entity_1.ComerConvEventEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_conv_event_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerAgreementEventsService);
exports.ComerAgreementEventsService = ComerAgreementEventsService;
//# sourceMappingURL=comer-agreement-events.service.js.map