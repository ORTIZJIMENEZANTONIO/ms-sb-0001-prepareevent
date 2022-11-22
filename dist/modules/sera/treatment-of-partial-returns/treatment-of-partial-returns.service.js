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
const comer_property_by_lot_entity_1 = require("../comer-property-by-lot/entities/comer-property-by-lot.entity");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const good_partial_delivery_entity_1 = require("./entities/good-partial-delivery.entity");
const goods_entity_1 = require("../file-util/entities/goods.entity");
const partial_property_delivered_service_1 = require("../partial-property-delivered/partial-property-delivered.service");
const good_not_delivered_service_1 = require("../good-not-delivered/good-not-delivered.service");
const comer_batch_service_1 = require("../comer-lot/comer-batch.service");
let TreatmentOfPartialReturnsService = class TreatmentOfPartialReturnsService {
    constructor(entityGoodXLot, entityGoodPartialDelivery, logger, counter, partialPropertyDeliveredService, goodNotDeliveredService, comerBatchService) {
        this.entityGoodXLot = entityGoodXLot;
        this.entityGoodPartialDelivery = entityGoodPartialDelivery;
        this.logger = logger;
        this.counter = counter;
        this.partialPropertyDeliveredService = partialPropertyDeliveredService;
        this.goodNotDeliveredService = goodNotDeliveredService;
        this.comerBatchService = comerBatchService;
    }
    async treatmentOfPartialReturns(goodNumber) {
        const returnLot = await this.getReturnLots(goodNumber);
        const goodsPartialDelivery = await this.getGoodsPartialDelivery(goodNumber);
        const cruds = [];
        if (returnLot) {
            cruds.push(await this.goodNotDeliveredService.updateGoodNotDeliveredToTheCanceledLot({
                lotIdNew: returnLot.lotId,
                lotId: returnLot.propertyByLotId,
                bxlId: 1,
                lotConsignment: returnLot.consignmentGoodsId,
                bxlConsignment: returnLot.consignmentLotId,
            }));
            cruds.push(await this.comerBatchService.createComerLotCanceled({
                pLotId: returnLot.previosGood,
                pEventId: returnLot.eventId,
                pLotPubId: returnLot.lotPub,
                pGood: goodNumber,
            }));
        }
        if (goodsPartialDelivery && returnLot) {
            cruds.push(this.partialPropertyDeliveredService.createNewPartialGood({
                lotId: returnLot.lotId,
                goodNumber: goodsPartialDelivery.enPartialGoddNumber,
                ldevcant: goodsPartialDelivery.quantity,
                previosGood: goodNumber,
            }));
        }
        console.log(cruds);
        return { cruds };
    }
    async getReturnLots(goodNumber) {
        const queryLots = this.entityGoodXLot
            .createQueryBuilder("bxl")
            .select([
            `lot.id as "lotId"`,
            `lot.eventId as "eventId"`,
            `bxl.propertyByLotId as "propertyByLotId"`,
            `lot.publicLot as "publicLot" `,
            `bxl.consignmentLotId as "consignmentLotId"`,
            `bxl.consignmentGoodsId as "consignmentGoodsId"`,
        ])
            .addFrom(comer_lot_entity_1.ComerLotEntity, "lot")
            .where(`bxl.goodNumber = ${goodNumber}`)
            .andWhere(`lot.id = bxl.lotId`)
            .andWhere(`lot.statusVtaId = 'PAG'`)
            .take(1);
        return await queryLots.getRawOne();
    }
    async getGoodsPartialDelivery(goodNumber) {
        const queryBep = this.entityGoodPartialDelivery
            .createQueryBuilder("bep")
            .select([`bep.enPartialGoddNumber`, `bie.quantity`])
            .addFrom(goods_entity_1.GoodsEntity, "bie")
            .where(`bep.no_bien = ${goodNumber}`)
            .andWhere("BEP.NO_BIEN_PARCIAL_EN = BIE.NO_BIEN");
        return await queryBep.getRawOne();
    }
};
TreatmentOfPartialReturnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_lot_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(good_partial_delivery_entity_1.GoodPartialDeliveryEntity)),
    __param(2, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(3, (0, nestjs_prometheus_1.InjectMetric)("treatment_of_partial_returns_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter,
        partial_property_delivered_service_1.PartialPropertyDeliveredService,
        good_not_delivered_service_1.GoodNotDeliveredService,
        comer_batch_service_1.ComerLotService])
], TreatmentOfPartialReturnsService);
exports.TreatmentOfPartialReturnsService = TreatmentOfPartialReturnsService;
//# sourceMappingURL=treatment-of-partial-returns.service.js.map