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
exports.PaProcessService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_events_entity_1 = require("../comer-events/entities/comer-events.entity");
const goods_entity_1 = require("./entities/goods.entity");
const comer_batch_entity_1 = require("../comer-batch/entities/comer-batch.entity");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const cat_transferent_entity_1 = require("./entities/cat-transferent.entity");
const record_entity_1 = require("./entities/record.entity");
const comer_parameter_mod_entity_1 = require("./entities/comer-parameter-mod.entity");
let PaProcessService = class PaProcessService {
    constructor(entityComerEvent, entityGoods, entityComerLot, logger, counter) {
        this.entityComerEvent = entityComerEvent;
        this.entityGoods = entityGoods;
        this.entityComerLot = entityComerLot;
        this.logger = logger;
        this.counter = counter;
    }
    async paActGoodLotMDto(params) {
        const { lotId, goodNumber, address } = params;
        const good = await this.entityGoods
            .createQueryBuilder()
            .select([`NO_CLASIF_BIEN as "vClasif"`, `CANTIDAD as "vQuantity"`])
            .where(`NO_BIEN=${goodNumber}`)
            .getRawOne();
        const comerLotSubquery = this.entityComerLot
            .createQueryBuilder()
            .select(`ID_EVENTO as "eventId"`)
            .where(`ID_LOTE = ${lotId}`);
        const event = await this.entityComerEvent
            .createQueryBuilder()
            .select([`ID_TPEVENTO`, `ID_EVENTO`])
            .where(`ID_EVENTO = (${comerLotSubquery.getQuery()})`)
            .getRawOne();
    }
    async paReject(params) {
        const { eventId, goodNumber, eventType, lotId, address, origin, pubLot } = params;
        const prQuery = this.entityGoods
            .createQueryBuilder("BIE")
            .select([`BIE.NO_BIEN`, `BIE.DESCRIPCION`, `BIE.ESTATUS`, ``])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "BL")
            .addFrom(cat_transferent_entity_1.CatTransferentEntity, "CAT")
            .addFrom(record_entity_1.RecordEntity, "EXD")
            .addFrom(comer_parameter_mod_entity_1.ParameterModEntity, "PAR ")
            .where(`NOT EXISTS (SELECT 1 FROM BIENES_TRANS_AVA AVA WHERE AVA.NO_BIEN = BIE.NO_BIEN)`)
            .andWhere(`BL.NO_BIEN = BIE.NO_BIEN`)
            .andWhere(`BL.ID_LOTE=${lotId}`)
            .andWhere(`BL.NO_BIEN=${goodNumber})`);
        console.log(prQuery.getQuery());
    }
};
PaProcessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_events_entity_1.ComerEventEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(goods_entity_1.GoodsEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(3, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(4, (0, nestjs_prometheus_1.InjectMetric)("pa_process_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], PaProcessService);
exports.PaProcessService = PaProcessService;
//# sourceMappingURL=pa-process.service.js.map