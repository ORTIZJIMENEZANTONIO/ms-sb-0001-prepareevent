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
exports.MandateFunctionService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const comer_batch_entity_1 = require("../comer-batch/entities/comer-batch.entity");
let MandateFunctionService = class MandateFunctionService {
    constructor(comerGoodsXLotRepository, comerLotsRepository, logger, counter) {
        this.comerGoodsXLotRepository = comerGoodsXLotRepository;
        this.comerLotsRepository = comerLotsRepository;
        this.logger = logger;
        this.counter = counter;
    }
    async updateMandate(params) {
        const { lotId, goodId } = params;
        if (goodId == 1) {
            const transferentNums = await this.comerLotsRepository.query(`
        UPDATE	sera.COMER_BIENESXLOTE BXL
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
            FROM		sera.EXPEDIENTES EXP, sera.BIENES BIE1
            WHERE		EXP.NO_EXPEDIENTE = BIE1.NO_EXPEDIENTE
            AND			BXL.NO_BIEN       = BIE1.NO_BIEN
        )
        WHERE			BXL.ID_LOTE = ${'22025'};
      `);
            console.log(transferentNums);
        }
        if (lotId == 1) {
            this.comerLotsRepository.query(`
        UPDATE	COMER_LOTES LOT
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
          FROM		COMER_BIENESXLOTE BXL
          WHERE		BXL.ID_LOTE = :COMER_LOTES.ID_LOTE
          AND			LIMIT 1
        )
        WHERE		LOT.ID_LOTE = :COMER_LOTES.ID_LOTE;
      `);
        }
        return { success: true };
    }
};
MandateFunctionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(2, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(3, (0, nestjs_prometheus_1.InjectMetric)("mandate_function_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], MandateFunctionService);
exports.MandateFunctionService = MandateFunctionService;
//# sourceMappingURL=mandate-function.service.js.map