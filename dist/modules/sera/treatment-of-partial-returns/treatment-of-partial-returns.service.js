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
exports.TreatmentOfPartialReturnsService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const comer_batch_entity_1 = require("../comer-batch/entities/comer-batch.entity");
const good_partial_delivery_entity_1 = require("./entities/good-partial-delivery.entity");
const goods_entity_1 = require("../file-util/entities/goods.entity");
let TreatmentOfPartialReturnsService = class TreatmentOfPartialReturnsService {
    constructor(entityGoodXLot, entityComerLot, entityGoodPartialDelivery, logger, counter) {
        this.entityGoodXLot = entityGoodXLot;
        this.entityComerLot = entityComerLot;
        this.entityGoodPartialDelivery = entityGoodPartialDelivery;
        this.logger = logger;
        this.counter = counter;
    }
    async treatmentOfPartialReturns(pGood) {
        const dev = {
            good: 0,
            lotPrevious: 0,
            event: 0,
            propertyByLotId: 0,
            lotPUb: 0,
        };
    }
    async geReturnLots(pGood) {
        const queryLots = this.entityGoodXLot
            .createQueryBuilder("bxl")
            .select([
            "bxl.consignmentGoodsId ",
            "consignmentLotId",
            "propertyByLotId",
        ])
            .addFrom(comer_batch_entity_1.ComerLotsEntity, "lot")
            .where(`bxl.goodNumber = ${pGood}`)
            .andWhere(`lot.lotId = bxl.lotId`)
            .andWhere(`lot.statusVtaId = 'PAG'`)
            .andWhere(``)
            .take(1);
        return await queryLots.getRawMany();
    }
    async getGoodsPArtialDelivery(goodNumber) {
        const queryBep = this.entityGoodPartialDelivery
            .createQueryBuilder("bep")
            .addFrom(goods_entity_1.GoodsEntity, "bie")
            .where(`bep.no_bien = ${goodNumber}`)
            .andWhere("BEP.NO_BIEN_PARCIAL_EN = BIE.NO_BIEN");
        return await queryBep.getRawMany();
    }
};
TreatmentOfPartialReturnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(good_partial_delivery_entity_1.GoodPartialDeliveryEntity)),
    __param(3, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(4, (0, nestjs_prometheus_1.InjectMetric)("treatment_of_partial_returns_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], TreatmentOfPartialReturnsService);
exports.TreatmentOfPartialReturnsService = TreatmentOfPartialReturnsService;
//# sourceMappingURL=treatment-of-partial-returns.service.js.map