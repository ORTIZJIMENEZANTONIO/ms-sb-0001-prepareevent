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
exports.PartialPropertyDeliveredService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
let PartialPropertyDeliveredService = class PartialPropertyDeliveredService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async insertNewPartialGood(lotId, goodNumber, ldevcant, previosGood) {
        const globalVat = 0.15;
        const locInbBxlId = this.getLastId(lotId);
        const values = Object.assign({ propertyByLotId: locInbBxlId, goodNumber,
            lotId }, this.getLotValues(lotId, ldevcant, globalVat, previosGood));
        console.log(values);
        return {};
    }
    async getLastId(lotId) {
        return await this.entity
            .createQueryBuilder()
            .select([`MAX(BXL.ID_BIENXLOTE) + 1`])
            .where(`BXL.ID_LOTE = ${lotId}`)
            .getRawOne();
    }
    async getLotValues(lotId, ldevcant, globalVat, previosGood) {
        return await this.entity
            .createQueryBuilder()
            .select([
            `((baseValue/quantity)*${ldevcant}) AS baseValue`,
            `appraisalPriceRef`,
            `((finalPrice/quantity)*${ldevcant}) as finalPrice`,
            `baseVat`,
            `( (finalPrice/quantity)*${ldevcant} - ROUND( ( (finalPrice/quantity)*${ldevcant}) / ${globalVat}, 2 ) ) as finalVat`,
            `camp1`,
            `camp2`,
            `camp3`,
            `camp4`,
            `camp5`,
            `surveyJurKey`,
            `storeNumber`,
            `${ldevcant} as quantity`,
            `vatPercent`,
            `inventoryNumber`,
            `camp6`,
            `ROUND( ( (finalPrice/quantity)*${ldevcant} ) / ${globalVat}, 2 ) as priceWithoutVat`,
            `( (amountNoAppVat/quantity)*${ldevcant} ) as amountNoAppVat`,
            `previousStatus`,
            `camp8`,
            `camp9`,
            `appraiserCompany`,
            `appraiserDate`,
            `( (amountAppVat/quantity)*${ldevcant} ) as amountAppVat`,
            `comerEventId`,
            `warrantyPrice`,
            `camp7`,
            `status`,
            `transferenceNumber`,
            `current_date as creationDate`,
            `comerLotId`,
            `consignmentEventId`,
            `consignmentLotId`,
            `advance`,
            `lotPcts`,
            `sold`,
            `observation`,
            `billDate`,
            `consignmentGoodsId`,
            `billNumber`,
            `annex`,
            `selected`,
            `cylindersNumber`,
            `origin`,
            `originCountry`,
            `lotDescription`,
        ])
            .where(`ID_LOTE = ${lotId}`)
            .andWhere(`NO_BIEN = ${previosGood}`)
            .getRawOne();
    }
};
PartialPropertyDeliveredService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("partial_property_delivered_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], PartialPropertyDeliveredService);
exports.PartialPropertyDeliveredService = PartialPropertyDeliveredService;
//# sourceMappingURL=partial-property-delivered.service.js.map