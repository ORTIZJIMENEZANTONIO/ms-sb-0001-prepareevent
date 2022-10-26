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
exports.ComerBatchService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_batch_entity_1 = require("./entities/comer-batch.entity");
const comer_events_entity_1 = require("../comer-events/entities/comer-events.entity");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
let ComerBatchService = class ComerBatchService {
    constructor(entity, logger, counter) {
        this.entity = entity;
        this.logger = logger;
        this.counter = counter;
    }
    async createComerLotCanceled({ pLotId, pEventId, pLotPubId, pGood, }) {
        const clcLotId = await this.entity.query(`SELECT NEXTVAL('sera.SEQ_COMER_LOTES') as val;`);
        const clcLotPubId = await this.entity
            .createQueryBuilder()
            .select([`MAX(LOTE_PUBLICO) + 1 AS max`])
            .where(`ID_EVENTO = ${pEventId}`)
            .getRawOne();
        const clcDescription = `DEVOLUCION PARCIAL DEL BIEN ${pGood} LOTE ${pLotPubId}`;
        const lotToCancel = await this.getLotToCancel(pLotId, pGood);
        const body = Object.assign({ description: clcDescription, publicLot: clcLotPubId.max, id: clcLotId[0].val, originLot: pLotId, statusVtaId: 'CAN', goodsNumber: 1 }, lotToCancel);
        return await this.entity.save(body);
    }
    async createComerLot(comer) {
        const comerExisting = await this.entity.findOneBy({
            id: comer.id,
        });
        if (comerExisting) {
            return {
                statusCode: 501,
                message: "ComerLot existing",
            };
        }
        return await this.entity.save(comer);
    }
    async getAllComersLot(pagination) {
        var _a, _b;
        this.counter.inc();
        const { inicio = 1, pageSize = 10 } = pagination;
        const result = await this.entity
            .createQueryBuilder("cl")
            .innerJoinAndMapOne("cl.eventId", comer_events_entity_1.ComerEventEntity, "ce", "cl.eventId = ce.eventId")
            .orderBy({ "cl.publicLot": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getComerLotByEventId(comer) {
        var _a, _b;
        const { eventId, inicio = 1, pageSize = 19 } = comer;
        const result = await this.entity
            .createQueryBuilder("cl")
            .innerJoinAndMapOne("cl.eventId", comer_events_entity_1.ComerEventEntity, "ce", "cl.eventId = ce.eventId")
            .where({ eventId })
            .orderBy({ "cl.publicLot": "DESC" })
            .skip((inicio - 1) * pageSize || 0)
            .take(pageSize)
            .getManyAndCount();
        return {
            data: (_a = result[0]) !== null && _a !== void 0 ? _a : [],
            count: (_b = result[1]) !== null && _b !== void 0 ? _b : 0,
        };
    }
    async getLotToCancel(lotId, goodNumber) {
        const lotQuery = this.entity
            .createQueryBuilder("lot")
            .select([
            `LOT.ID_EVENTO as "eventId"`,
            `LOT.VALOR_BASE as "baseValue"`,
            `LOT.ID_CLIENTE as "customerId"`,
            `LOT.PRECIO_GARANTIA as "warrantyPrice"`,
            `BXL.NO_TRANSFERENTE as "transferenceNumber"`,
            `BXL.PRECIO_FINAL as "finalPrice"`,
            `BXL.IVA_FINAL as "lotVat"`,
            `BXL.PRECIO_SIN_IVA as "amountAppVat"`,
            `BXL.MONTO_NOAPP_IVA as "amountWithoutVat"`,
            `LOT.REFERENCIAG as "referenceG"`,
            `LOT.REFERENCIAL as "referential"`,
            `LOT.VALIDO_SISTEMA as "systemValid"`,
            `BXL.MONTO_NOAPP_IVA as "amountNoAppVat"`,
            `LOT.PORC_APP_IVA as "vatAppPercentage"`,
            `LOT.PORC_NOAPP_IVA as "vatNoAppPercentage"`,
            `LOT.COORDINACION_REG as "regCoordination"`,
            `LOT.COORDINADOR_REG as "regCoordinator"`,
            `LOT.DATO_FISC_MAND as "fiscMandFact"`,
            `LOT.UBICACION as "ubication"`,
            `LOT.ESASIGNADO as "assignedEs"`,
            `LOT.ESCHATARRA as "scrapEs"`,
            `LOT.NO_DELEGACION as "delegationNumber"`,
            `LOT.SOLICITA as "request"`,
            `LOT.MONTO_RETENIDO as "withheldAmount"`,
        ])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "bxl")
            .where(`LOT.ID_LOTE = BXL.ID_LOTE`)
            .andWhere(`LOT.ID_LOTE = ${lotId}`)
            .andWhere(`BXL.NO_BIEN = ${goodNumber}`);
        return await lotQuery.getRawOne();
    }
    async updateComerLot({ lotIdToUpdt }, comer) {
        const data = await this.entity.findOne({
            where: { id: lotIdToUpdt },
        });
        if (data) {
            delete comer.id;
            this.entity.merge(data, comer);
            return this.entity.save(data);
        }
        return false;
    }
    async deleteComerLot(comer) {
        const { id } = comer;
        return await this.entity.delete({ id });
    }
};
ComerBatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(2, (0, nestjs_prometheus_1.InjectMetric)("comer_lot_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerBatchService);
exports.ComerBatchService = ComerBatchService;
//# sourceMappingURL=comer-batch.service.js.map