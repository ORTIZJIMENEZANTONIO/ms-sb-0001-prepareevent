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
    async createNewPartialGood({ lotId, goodNumber, ldevcant, previosGood, }) {
        var _a;
        const globalVat = 0.15;
        const restBody = await this.getLotValues(lotId, ldevcant, globalVat, previosGood);
        const lotInbBxlId = await this.getLastId(lotId);
        if (!restBody || !lotInbBxlId) {
            return null;
        }
        const values = Object.assign(Object.assign({}, restBody), { propertyByLotId: lotInbBxlId.max, goodNumber,
            lotId });
        try {
            return await this.entity.save(values);
        }
        catch (error) {
            return {
                statusCode: 506,
                message: (_a = error.detail) !== null && _a !== void 0 ? _a : "Wrong parameters to insert"
            };
        }
    }
    async getLastId(lotId) {
        return await this.entity
            .createQueryBuilder("bxl")
            .select([`MAX(bxl.ID_BIENXLOTE) + 1 as max`])
            .where(`bxl.ID_LOTE = ${lotId}`)
            .getRawOne();
    }
    async getLotValues(lotId, ldevcant, globalVat, previosGood) {
        const lot = this.entity
            .createQueryBuilder()
            .select([
            `( (valor_base/cantidad)*${ldevcant} ) AS "baseValue"`,
            `PRECIO_AVALUO_REF as "appraisalPriceRef"`,
            `( (PRECIO_FINAL / CANTIDAD)*${ldevcant} ) as "finalPrice"`,
            `IVA_BASE as "baseVat"`,
            `( (PRECIO_FINAL / CANTIDAD)*${ldevcant} - ROUND( ( (PRECIO_FINAL / CANTIDAD)*${ldevcant}) / ${globalVat}, 2 ) ) as "finalVat"`,
            `CAMPO1 as "camp1"`,
            `CAMPO2 as "camp2"`,
            `CAMPO3 as "camp3"`,
            `CAMPO4 as "camp4"`,
            `CAMPO5 as "camp5"`,
            `CVE_PERITAJE_JUR as "surveyJurKey"`,
            `NO_ALMACEN as "storeNumber"`,
            `${ldevcant} as "quantity"`,
            `PORC_IVA as "vatPercent"`,
            `NO_INVENTARIO as "inventoryNumber"`,
            `CAMPO6 as "camp6"`,
            `ROUND( ( (PRECIO_FINAL / CANTIDAD)*${ldevcant} ) / ${globalVat}, 2 ) as "priceWithoutVat"`,
            `( (MONTO_NOAPP_IVA / CANTIDAD)*${ldevcant} ) as "amountNoAppVat"`,
            `ESTATUS_ANT as "previousStatus"`,
            `CAMPO8 as "camp8"`,
            `CAMPO9 as "camp9"`,
            `EMPRESA_VALUADORA as "appraiserCompany"`,
            `FECHA_AVALUO as "appraiserDate"`,
            `( (MONTO_APP_IVA / CANTIDAD)*${ldevcant} ) as "amountAppVat"`,
            `ID_EVENTO_COMER as "comerEventId"`,
            `PRECIO_GARANTIA as "warrantyPrice"`,
            `CAMPO7 as "camp7"`,
            `ESTATUS_COMER as "status"`,
            `NO_TRANSFERENTE as "transferenceNumber"`,
            `current_date as "creationDate"`,
            `ID_LOTE_COMER as "comerLotId"`,
            `ID_EVENTO_REMESA as "consignmentEventId"`,
            `ID_LOTE_REMESA as "consignmentLotId"`,
            `ANTICIPO as "advance"`,
            `PCTSLOTE as "lotPcts"`,
            `VENDIDO as "sold"`,
            `OBSERVACIONES as "observation"`,
            `FECHA_FACTURA as "billDate"`,
            `ID_BIENXLOTE_REMESA as "consignmentGoodsId"`,
            `NO_FACTURA as "billNumber"`,
            `ANEXO as "annex"`,
            `SELECCIONADO as "selected"`,
            `NO_CILINDROS as "cylindersNumber"`,
            `PROCEDENCIA as "origin"`,
            `PAIS_PROCEDENCIA as "originCountry"`,
            `DESCRIPCION_LOTE as "lotDescription"`,
        ])
            .where(`ID_LOTE = ${lotId}`)
            .andWhere(`NO_BIEN = ${previosGood}`);
        return await lot.getRawOne();
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