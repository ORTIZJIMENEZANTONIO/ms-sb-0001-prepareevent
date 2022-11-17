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
exports.ComerRejectedPropertyService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_rejected_property_entity_1 = require("./entities/comer-rejected-property.entity");
const comer_events_entity_1 = require("../comer-events/entities/comer-events.entity");
let ComerRejectedPropertyService = class ComerRejectedPropertyService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async createComerRejectedProperty(comer) {
        const comerExisting = await this.entity.findOneBy({
            id: comer.rejectedGoodId,
        });
        if (comerExisting) {
            return {
                statusCode: 501,
                message: "ComerRejected existing",
            };
        }
        return await this.entity.save(comer);
    }
    async getAllComersRejectedProperties(pagination) {
        var _a, _b;
        this.counter.inc();
        const { inicio = 1, pageSize = 10 } = pagination;
        const result = await this.entity
            .createQueryBuilder("crp")
            .innerJoinAndMapOne("crp.eventId", comer_events_entity_1.ComerEventEntity, "ce", "crp.eventId = ce.eventId")
            .orderBy({ "crp.rejectedGoodId": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerRejectedPropertyById(comer) {
        var _a, _b;
        const { rejectedGoodId } = comer;
        const result = await this.entity
            .createQueryBuilder("crp")
            .innerJoinAndMapOne("crp.eventId", comer_events_entity_1.ComerEventEntity, "ce", "crp.eventId = ce.eventId")
            .where({ rejectedGoodId })
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerRejectedPropertyByEventId(comer) {
        var _a, _b;
        this.counter.inc();
        const { eventId, inicio = 1, pageSize = 10 } = comer;
        const result = await this.entity
            .createQueryBuilder("crp")
            .innerJoinAndMapOne("crp.eventId", comer_events_entity_1.ComerEventEntity, "ce", "crp.eventId = ce.eventId")
            .where({ eventId })
            .orderBy({ "crp.noProperty": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async updateComerRejectedProperty({ rejectedGoodIdToUpdt }, comer) {
        const data = await this.entity.findOneBy({
            id: rejectedGoodIdToUpdt,
        });
        if (data) {
            delete comer.rejectedGoodId;
            this.entity.merge(data, comer);
            return this.entity.save(data);
        }
        return null;
    }
    async deleteComerRejectedProperty(comerRejected) {
        return await this.entity.delete(comerRejected);
    }
};
ComerRejectedPropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_rejected_property_entity_1.ComerRejectedPropertyEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_rejected_property_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerRejectedPropertyService);
exports.ComerRejectedPropertyService = ComerRejectedPropertyService;
//# sourceMappingURL=comer-rejected-property.service.js.map