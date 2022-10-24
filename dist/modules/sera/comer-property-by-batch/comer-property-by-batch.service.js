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
exports.ComerPropertyByBatchService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_property_by_batch_entity_1 = require("./entities/comer-property-by-batch.entity");
let ComerPropertyByBatchService = class ComerPropertyByBatchService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async createComerGoodXLot(comer) {
        const comerExisting = await this.entity.findOneBy({
            goodNumber: comer.goodNumber,
            lotId: comer.lotId,
        });
        if (comerExisting) {
            return {
                statusCode: 501,
                message: "ComerGoodXLot existing",
            };
        }
        return await this.entity.save(comer);
    }
    async getAllComerGoodXLots({ inicio, pageSize }) {
        const [result, total] = await this.entity.findAndCount({
            order: { goodNumber: "DESC" },
            take: pageSize || 10,
            skip: (inicio - 1) * pageSize || 0,
        });
        return {
            data: result,
            count: total,
        };
    }
    async getComerXLotByLotId(comerEvent) {
        var _a, _b;
        const { lotId, inicio = 1, pageSize = 10 } = comerEvent;
        const result = await this.entity
            .createQueryBuilder("table")
            .where({ lotId })
            .take(pageSize)
            .skip((inicio - 1) * pageSize || 0)
            .orderBy("table.goodsId", "DESC")
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async updateComerXLot({ goodIdToUpdt, lotIdToUpdt }, comer) {
        const data = await this.entity.findOneBy({ goodNumber: goodIdToUpdt, lotId: lotIdToUpdt });
        if (data) {
            delete comer.goodNumber;
            delete comer.lotId;
            this.entity.merge(data, comer);
            return this.entity.save(data);
        }
        return null;
    }
    async deleteComerXLot(comer) {
        const { goodNumber, lotId } = comer;
        return await this.entity.delete({ goodNumber, lotId });
    }
};
ComerPropertyByBatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_goods_x_lot_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerPropertyByBatchService);
exports.ComerPropertyByBatchService = ComerPropertyByBatchService;
//# sourceMappingURL=comer-property-by-batch.service.js.map