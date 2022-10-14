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
exports.ComerEventsService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_events_entity_1 = require("./entities/comer-events.entity");
const text_1 = require("../../../shared/functions/text");
let ComerEventsService = class ComerEventsService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async createComerEvent(comerEvent) {
        try {
            return await this.entity.save(comerEvent);
        }
        catch (error) {
            return { error: error.detail };
        }
    }
    async getAllComerEvents(pagination) {
        var _a, _b;
        this.counter.inc();
        const { inicio = 1, pageSize = 10 } = pagination;
        const result = await this.entity
            .createQueryBuilder("ce")
            .orderBy({ "ce.eventId": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerEventByAddress(comerEvent) {
        var _a, _b;
        const { address, inicio = 1, pageSize = 10 } = comerEvent;
        const result = await this.entity
            .createQueryBuilder("table")
            .where(`${text_1.Text.formatTextDb("table.address")} like '%${text_1.Text.formatText(address)}%' `)
            .take(pageSize)
            .skip((inicio - 1) * pageSize || 0)
            .orderBy("table.eventTpId", "DESC")
            .addOrderBy("table.eventId", "DESC")
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerEventByAddressAndId(comerEvent) {
        var _a, _b;
        const { address, eventId } = comerEvent;
        const result = await this.entity
            .createQueryBuilder("table")
            .where({ eventId })
            .andWhere({ address })
            .orderBy("table.eventId", "DESC")
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerEventByTpEvent(comerEvent) {
        var _a, _b;
        const { eventTpId, lotId, address, inicio = 1, pageSize = 10 } = comerEvent;
        const subQueryDeep = await this.entity.query(`
      SELECT 1
      FROM   sera.COMER_BIENESXLOTE BXL
      WHERE  BXL.ID_LOTE = ${lotId}
      AND  BXL.VENDIDO IS NULL
    `);
        const subQuery = await this.entity.query(`
      SELECT 1
      FROM   sera.COMER_LOTES LOT
      WHERE  ${subQueryDeep.length > 0}
    `);
        const result = await this.entity
            .createQueryBuilder("t")
            .where({ eventTpId })
            .andWhere({ address })
            .take(pageSize)
            .skip((inicio - 1) * pageSize || 0)
            .orderBy("t.eventId", "DESC")
            .getManyAndCount();
        return subQuery.length < 1
            ? []
            : {
                data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
                count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
            };
    }
    async updateComerEvent() {
    }
    async deleteComerEvent(comer) {
        const { eventId } = comer;
        return await this.entity.delete({ eventId });
    }
};
ComerEventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_events_entity_1.ComerEventEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_event_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerEventsService);
exports.ComerEventsService = ComerEventsService;
//# sourceMappingURL=comer-events.service.js.map