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
exports.ComerSentenceDispersionService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const https = require("https");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
const comer_payment_ref_entity_1 = require("./entities/comer-payment-ref.entity");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_parameter_mod_entity_1 = require("../current-event/entities/comer-parameter-mod.entity");
let ComerSentenceDispersionService = class ComerSentenceDispersionService {
    constructor(entityComerEvent, entityComerPaymentRef, entityComerLot, entityComerParameterMod, logger, counter) {
        this.entityComerEvent = entityComerEvent;
        this.entityComerPaymentRef = entityComerPaymentRef;
        this.entityComerLot = entityComerLot;
        this.entityComerParameterMod = entityComerParameterMod;
        this.logger = logger;
        this.counter = counter;
    }
    async setSentenceDispersion(params) {
        const { eventId, lotId, uspen } = params;
        const event = await this.getPenalty(eventId);
        const lot = await this.getLot(lotId);
        const lotCost = await this.getCost(lotId);
        const lvDeftPenalty = event.tpEventId == 1 && event.address == "M"
            ? "P_SPBM"
            : event.tpEventId == 2 && event.address == "I"
                ? "P_LCT"
                : event.tpEventId == 4 && event.address == "M"
                    ? "P_SEBM"
                    : event.tpEventId == 4 && event.address == "I"
                        ? "P_SEBM"
                        : null;
        let finalPrice = 0;
        const lvDaysLimit = (await this.getValueParameter(lvDeftPenalty, event.address)) || 0;
        if (event.tpEventId == 2) {
            const daysLimit2 = await this.getValueParameter("P_LICT", event.address);
            const lvDaysLimit2 = daysLimit2.value || null;
            const { now, failDate, fail, fail2 } = await this.getFailDates(event.id, lvDaysLimit, lvDaysLimit2);
            const nowDate = new Date(now);
            const failC1 = fail + 30;
            const failC2 = fail2.setDate(fail2.getDate(), 30);
            if (nowDate > fail && nowDate < fail2) {
                const lvIdPenaltyArray = await this.getLvIdPenalty(lot.clientId, lot.eventId, lot.id);
                const lvIdPenalty = lvIdPenaltyArray[0].total;
                if (lvIdPenalty == 0) {
                    let referenceType = 0;
                    for (const cost of lotCost) {
                        finalPrice = Number(cost.amount) + finalPrice;
                        referenceType = Number(cost.reference.substr(1, 1));
                    }
                    const lsValor25 = Number(lot.finalPrice);
                    const vIdPenalty = referenceType == 2 || referenceType == 7 ? 5 : 6;
                    if (lsValor25 < finalPrice) {
                        await this.insertIntoComerPnalties(lot.clientId, lot.eventId, lot.id, lot.publicLot, vIdPenalty, failC1, fail, uspen, event.tpEventId);
                        return "Penalizaci??n creada correctamente";
                    }
                }
            }
            else if (nowDate > fail2) {
                const lvIdPenaltyArray = await this.getLvIdPenalty(lot.clientId, lot.eventId, lot.id);
                const lvIdPenalty = lvIdPenaltyArray[0].total;
                if (lvIdPenalty == 0) {
                    let referenceType = 0;
                    for (const cost of lotCost) {
                        finalPrice = Number(cost.amount) + finalPrice;
                        referenceType = Number(cost.reference.substr(1, 1));
                    }
                    const lsValor25 = Number(lot.finalPrice) * 0.25;
                    const vIdPenalty = referenceType == 2 || referenceType == 7 ? 5 : 6;
                    if (lsValor25 < finalPrice) {
                        await this.insertIntoComerPnalties(lot.clientId, lot.eventId, lot.id, lot.publicLot, vIdPenalty, failC1, fail, uspen, event.tpEventId);
                        return "Penalizaci??n creada correctamente";
                    }
                }
            }
        }
        else if (event.tpEventId == 1 || event.tpEventId == 4) {
            const { now, failDate, fail, fail2 } = await this.getFailDates(event.id, lvDaysLimit, null);
            const nowDate = new Date(now);
            const failIn = fail.setDate(fail.getDate(), 30);
            if (nowDate > fail) {
                const lvIdPenaltyArray = await this.getLvIdPenalty(lot.clientId, lot.eventId, lot.id);
                const lvIdPenalty = lvIdPenaltyArray[0].total;
                const dateInOpen = fail.setDate(fail.getDate(), 30);
                if (lvIdPenalty == 0) {
                    let referenceType = 0;
                    for (const cost of lotCost) {
                        finalPrice = Number(cost.amount) + finalPrice;
                        referenceType = Number(cost.reference.substr(1, 1));
                    }
                    const lsValor25 = Number(lot.finalPrice) * 0.25;
                    const vIdPenalty = referenceType == 2 || referenceType == 7 ? 4 : 6;
                    if (lsValor25 < finalPrice) {
                        await this.insertIntoComerPnalties(lot.clientId, lot.eventId, lot.id, lot.publicLot, vIdPenalty, dateInOpen, fail, uspen, event.tpEventId);
                        return "Penalizaci??n creada correctamente";
                    }
                }
            }
        }
        return "Datos sin coincidencia";
    }
    async getCost(lotId) {
        const costQuery = this.entityComerPaymentRef
            .createQueryBuilder("pr")
            .select([`MONTO as "amount"`, `REFERENCIA as "reference"`])
            .where(`ID_LOTE = ${lotId}`)
            .andWhere(`( IDORDENINGRESO IS NOT NULL OR  VALIDO_SISTEMA = 'S')`);
        return await costQuery.getRawMany();
    }
    async getPenalty(id) {
        const eventQuery = this.entityComerEvent
            .createQueryBuilder(`ev`)
            .select([
            `ID_EVENTO as "id"`,
            `ID_TPEVENTO as "tpEventId"`,
            `ID_ESTATUSVTA as "statusVta"`,
            `DIRECCION as "address"`,
            `FEC_FALLO as "failDate"`,
            `FEC_EVENTO as "eventDate"`,
            `USUARIO as "user"`,
        ])
            .where({ id })
            .andWhere(`ID_TPEVENTO IN (1, 2, 4) `)
            .andWhere(`ID_ESTATUSVTA IN ('VEN','CONC')`);
        return await eventQuery.getRawOne();
    }
    async getLot(lotId) {
        const lotQuery = this.entityComerLot
            .createQueryBuilder("lot")
            .select([
            `ID_LOTE as "id"`,
            `ID_ESTATUSVTA as "statusVtaId"`,
            `ID_EVENTO as "eventId"`,
            `LOTE_PUBLICO as "publicLot"`,
            `DESCRIPCION as "description"`,
            `VALOR_BASE as "baseValue"`,
            `ID_CLIENTE as "clientId"`,
            `PRECIO_GARANTIA as "warrantyPrice"`,
            `PRECIO_FINAL as "finalPrice"`,
        ])
            .where(`ID_LOTE = ${lotId}`)
            .andWhere(`ID_CLIENTE IS NOT NULL`);
        return await lotQuery.getRawOne();
    }
    async getValueParameter(lvDeftPenalty, address) {
        const valueQuery = this.entityComerParameterMod
            .createQueryBuilder()
            .select([`valor as "value"`])
            .where(`PARAMETRO = '${lvDeftPenalty}'`)
            .andWhere(`DIRECCION = '${address}'`);
        return await valueQuery.getRawOne();
    }
    async getFailDates(eventId, lvDaysLimit, lvDaysLimit2) {
        const failDatesQuery = this.entityComerEvent
            .createQueryBuilder()
            .select([
            `to_char(now(), 'YYYY-MM-DD') as "now"`,
            `FEC_FALLO as "failDate"`,
            `sera.OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${lvDaysLimit}) as "fail"`,
            `sera.OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${lvDaysLimit2 || lvDaysLimit}) as "fail2"`,
        ])
            .where(`ID_EVENTO = ${eventId}`);
        return await failDatesQuery.getRawOne();
    }
    async getLvIdPenalty(clientId, eventId, lotId) {
        return await this.entityComerEvent.query(`
      SELECT COUNT (1) as "total"
      FROM sera.COMER_PENALIZACIONES -- _TPENALIZA
      WHERE ID_CLIENTE = ${clientId}
        AND ID_EVENTO  = ${eventId}
        AND ID_LOTE      = ${lotId}`);
    }
    async insertIntoComerPnalties(clientId, eventId, lotId, publicLot, vIdPenalty, failC1, fail, uspen, tpEventId) {
        const insertQuery = `
      INSERT INTO sera.COMER_PENALIZACIONES(
        ID_CLIENTE,    
        ID_EVENTO,         
        ID_LOTE,         
        LOTE_PUBLICO,    
        ID_PENALIZACION,   
        REFE_OFICIO_OTRO,
        FECHA_FINAL,    
        FECHA_INICIAL,      
        USUARIO,        
        TIPO_PROCESO,    
        P_BANDERA
      )
      VALUES (
        ${clientId},    
        ${eventId}, 
        ${lotId},   
        ${publicLot} ,  
        ${vIdPenalty},  
        'AUTOMATICO',
        '${new Date(failC1).toISOString().substring(0, 10)}',  
        '${new Date(fail).toISOString().substring(0, 10)}',         
        '${uspen}',      
        ${tpEventId},
        1
      );
      `;
        return await this.entityComerEvent.query(insertQuery);
    }
};
ComerSentenceDispersionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_event_entity_1.ComerEventEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_payment_ref_entity_1.ComerPaymentReferenceEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_lot_entity_1.ComerLotEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(comer_parameter_mod_entity_1.ComerParameterModEntity)),
    __param(4, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(5, (0, nestjs_prometheus_1.InjectMetric)("comer_sentence_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], ComerSentenceDispersionService);
exports.ComerSentenceDispersionService = ComerSentenceDispersionService;
//# sourceMappingURL=comer-sentence-dispersion.service.js.map