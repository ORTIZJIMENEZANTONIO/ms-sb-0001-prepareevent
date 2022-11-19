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
exports.GoodNotDeliveredService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
let GoodNotDeliveredService = class GoodNotDeliveredService {
    constructor(entity, entityLot, logger, counter) {
        this.entity = entity;
        this.entityLot = entityLot;
        this.logger = logger;
        this.counter = counter;
    }
    async updateGoodNotDeliveredToTheCanceledLot({ lotIdNew, lotId, bxlId, lotConsignment, bxlConsignment, }) {
        try {
            const elementUpdated = [];
            elementUpdated.push(await this.updateGoodToCancelLot(lotIdNew, lotId, bxlId));
            elementUpdated.push(await this.updateConsignmentToPointToGoodCanceled(lotIdNew, lotConsignment, bxlConsignment));
            elementUpdated.push(await this.updateFinalPriceLot(lotId));
            elementUpdated.push(await this.updateFinalPriceLot(lotIdNew));
            const rowsAffected = elementUpdated.reduce((el, carry) => { var _a; return (_a = el + carry.affected) !== null && _a !== void 0 ? _a : 0; }, 0);
            return { message: `${rowsAffected} elements updated` };
        }
        catch (error) {
            console.error(error);
            return { statusCode: 506, message: "Wrong parameters" };
        }
    }
    async updateGoodToCancelLot(lotIdNew, lotId, bxlId) {
        const propertyQuery = this.entity
            .createQueryBuilder()
            .update(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)
            .set({ lotId: lotIdNew })
            .where(`id_lote = ${lotId}`)
            .andWhere(`ID_BIENXLOTE = ${bxlId}`);
        return await propertyQuery.execute();
    }
    async updateConsignmentToPointToGoodCanceled(lotIdNew, lotConsignment, bxlConsignment) {
        const propertyQuery = this.entity
            .createQueryBuilder()
            .update(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)
            .set({ comerLotId: lotIdNew, sold: "N" })
            .where(`id_lote = ${lotConsignment}`)
            .andWhere(`ID_BIENXLOTE = ${bxlConsignment}`);
        return await propertyQuery.execute();
    }
    async updateFinalPriceLot(lotId) {
        const queryFinalPrice = await this.entity
            .createQueryBuilder("bxl")
            .select(`coalesce(SUM(bxl.finalPrice), 0) as "finalPrice"`)
            .where(`bxl.ID_LOTE = ${lotId}`)
            .getRawOne();
        if (!queryFinalPrice) {
            return queryFinalPrice;
        }
        const propertyQuery = this.entityLot
            .createQueryBuilder()
            .update(comer_lot_entity_1.ComerLotEntity)
            .set({ finalPrice: queryFinalPrice.finalPrice })
            .where(`ID_LOTE = ${lotId}`);
        return await propertyQuery.execute();
    }
};
GoodNotDeliveredService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_lot_entity_1.ComerLotEntity)),
    __param(2, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(3, (0, nestjs_prometheus_1.InjectMetric)("good_not_delivered_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], GoodNotDeliveredService);
exports.GoodNotDeliveredService = GoodNotDeliveredService;
//# sourceMappingURL=good-not-delivered.service.js.map