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
const cat_label_entity_1 = require("./entities/cat-label.entity");
const comer_rejected_property_entity_1 = require("../comer-rejected-property/entities/comer-rejected-property.entity");
let PaProcessService = class PaProcessService {
    constructor(entityComerEvent, entityGoods, entityComerLot, entityComerRejected, logger, counter) {
        this.entityComerEvent = entityComerEvent;
        this.entityGoods = entityGoods;
        this.entityComerLot = entityComerLot;
        this.entityComerRejected = entityComerRejected;
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
        var _a;
        const { eventId, goodNumber, eventType, lotId, address, origin, pubLot } = params;
        const whereBase = `BL.NO_BIEN=BIE.NO_BIEN AND BL.ID_LOTE=${lotId} AND BL.NO_BIEN=${goodNumber}`;
        const queryResult = {
            created: 0,
            createdErrors: 0,
            updated: 0,
            updatedErrors: 0,
        };
        const prQuery1 = this.entityGoods
            .createQueryBuilder(`bie`)
            .select([
            `bie.NO_BIEN`,
            `bie.DESCRIPCION`,
            `bie.ESTATUS`,
            `'||''''||EL MANDATO '||''''||' '||
        '||'||CAT.CVMAN||'||'||''''||' NO SE PUEDE COMERCIALIZAR'||''''||'' as causa, 3 as tipo, NULL as EVENTOLOT , NULL as LOTEPUB `,
        ])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "bl")
            .addFrom(cat_transferent_entity_1.CatTransferentEntity, "cat")
            .addFrom(record_entity_1.RecordEntity, "exd")
            .addFrom(comer_parameter_mod_entity_1.ParameterModEntity, "par")
            .where(whereBase)
            .andWhere(`cat.CVMAN = par.VALOR `)
            .andWhere(`bie.NO_EXPEDIENTE = exd.NO_EXPEDIENTE `)
            .andWhere(`exd.NO_TRANSFERENTE = cat.NO_TRANSFERENTE`)
            .andWhere(`par.PARAMETRO = 'RESTMAND'`)
            .andWhere(`par.DIRECCION = '${address}'`);
        const prQuery2 = this.entityGoods
            .createQueryBuilder(`bie`)
            .select([
            `bie.NO_BIEN`,
            `bie.DESCRIPCION`,
            `bie.ESTATUS`,
            ` '||''''||LA ETIQUETA '||''''||
        '||'||cat.DESCRIPCION||'||'||''''||' NO SE PUEDE COMERCIALIZAR'||'''' as CAUSA,4 TIPO, NULL EVENTOLOT, NULL LOTEPUB`,
        ])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "bl")
            .addFrom(comer_parameter_mod_entity_1.ParameterModEntity, "par")
            .addFrom(cat_label_entity_1.CatLabelEntity, "cat")
            .where(whereBase)
            .andWhere(`bie.NO_ETIQUETA = cat.NO_ETIQUETA`)
            .andWhere(`par.DIRECCION ='${address}'`)
            .andWhere(`par.PARAMETRO = 'ETIQUETANP'`)
            .andWhere(`bie.NO_ETIQUETA = par.VALOR::numeric`);
        const prQuery3 = this.entityGoods
            .createQueryBuilder(`bie`)
            .select([
            `bie.NO_BIEN`,
            `bie.DESCRIPCION`,
            `bie.ESTATUS`,
            `'||''''||No es un bien del programa de desalojo'||''''||'R1_CAUSA, 5 TIPO '||
        ', NULL EVENTOLOT, NULL LOTEPUB ' as concat `,
        ])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "bl")
            .where(whereBase)
            .andWhere(`BIE.ESTATUS IN ('VXR', 'VXP')`)
            .andWhere(`NOT EXISTS (SELECT 1 FROM sera.BIENES_CARGA_MASIVA BCM WHERE BCM.NO_BIEN=BIE.NO_BIEN AND BCM.DESALOJO_DIADIA=1)`);
        const prQueryAddress = this.entityGoods
            .createQueryBuilder(`bie`)
            .select([
            `bie.NO_BIEN`,
            `bie.DESCRIPCION`,
            `bie.ESTATUS`,
            `'||''''||'||'No cuenta con avaluo'||'''' as  CAUSA`,
            `NULL TIPO`,
            `NULL EVENTOLOT`,
            `NULL LOTEPUB`,
        ])
            .addFrom(comer_property_by_batch_entity_1.ComerGoodsXLotEntity, "bl")
            .where(`NOT EXISTS (SELECT 1 FROM comer.BIENES_TRANS_AVA AVA WHERE AVA.NO_BIEN=bie.NO_BIEN) AND bl.NO_BIEN = bie.NO_BIEN AND bl.ID_LOTE=${lotId} AND bl.NO_BIEN=${goodNumber}`).andWhere(`NOT EXISTS ( SELECT 1 
    FROM sera.COMER_DETAVALUO DA
    WHERE DA.NO_BIEN=bie.NO_BIEN
    limit 1 )`);
        const results = [
            ...(await prQuery1.getRawMany()),
            ...(await prQuery2.getRawMany()),
            ...(await prQuery3.getRawMany()),
            ...(eventType != 5 && eventType != 6 && (address == "M" || address == "I")
                ? await prQueryAddress.getRawMany()
                : []),
        ];
        for (const result of results) {
            const exists = await this.entityComerRejected
                .createQueryBuilder("cr")
                .select([`COUNT(1)`])
                .where(`no_bien = ${result.no_bien}`)
                .andWhere(`ID_EVENTO=${eventId}`)
                .getRawOne();
            if (exists.count == 0) {
                const newIdQr = await this.entityComerRejected.query(`Select id_bienrechazado from sera.comer_bienesrechazados order by id_bienrechazado desc limit 1`);
                const newId = newIdQr[0] ? newIdQr + 1 : 1;
                try {
                    await this.entityComerRejected.save({
                        id: newId,
                        eventId: eventId,
                        propertyNumber: goodNumber,
                        origin: origin,
                        description: result.descripcion,
                        status: result.estatus,
                        cause: result.causa,
                        event: null,
                        batchPublic: result.pubLot,
                        rejectedReason: result.tipo,
                        batchOrigin: pubLot,
                    });
                    queryResult.created++;
                }
                catch (error) {
                    console.error((_a = error.detail) !== null && _a !== void 0 ? _a : error);
                    queryResult.createdErrors++;
                }
            }
            else {
                const existingObject = await this.entityComerRejected
                    .createQueryBuilder()
                    .select([`causa`])
                    .where(`no_bien = ${goodNumber}`)
                    .andWhere(`ID_EVENTO = ${eventId}`)
                    .getRawOne();
                const { affected } = await this.entityComerRejected
                    .createQueryBuilder()
                    .update(comer_rejected_property_entity_1.ComerRejectedPropertyEntity)
                    .set({ cause: `${existingObject.causa}, ${result.causa}` })
                    .where(`no_bien = ${result.no_bien}`)
                    .andWhere(`ID_EVENTO=${eventId}`)
                    .execute();
                queryResult.updated = +affected;
            }
        }
        return queryResult;
    }
    async paRemittancePrepByGood(params) {
        var _a, _b;
        const { eventId, goodNumber, cause, eventType } = params;
        const queryResult = {
            created: 0,
            createdErrors: 0,
            updated: 0,
            updatedErrors: 0,
        };
        const query1 = await this.entityGoods
            .createQueryBuilder()
            .select([`estatus as "status"`, `descripcion as "description"`])
            .where(`no_bien = ${goodNumber}`)
            .getRawOne();
        const query2 = await this.entityComerEvent
            .createQueryBuilder("ce")
            .select([`ce.ID_EVENTO as "eventId"`, `ce.ID_TPEVENTO as "tpEventId"`])
            .addFrom(comer_batch_entity_1.ComerLotsEntity, "cl")
            .where(`ce.ID_EVENTO = cl.ID_EVENTO`)
            .andWhere(`ce.ID_TPEVENTO != 6`)
            .andWhere(`NOT EXISTS ( SELECT 1 FROM sera.COMER_PARAMETROSMOD cp
            WHERE cl.ID_ESTATUSVTA = cp.PARAMETRO   
              AND VALOR = 'TPCAN'  
              AND DIRECCION = ce.DIRECCION)`)
            .andWhere(`CL.ID_LOTE= ( SELECT MAX(ID_LOTE) FROM sera.COMER_BIENESXLOTE CB
        WHERE CB.NO_BIEN =  ${goodNumber})`)
            .getRawMany();
        const query3 = await this.entityComerRejected
            .query(`SELECT COUNT(1) as "goodRejected"
      FROM sera.COMER_BIENESRECHAZADOS
      WHERE NO_BIEN = ${goodNumber}
      AND ID_EVENTO = ${eventId}`);
        console.log(query1, query2, query3[0]);
        if (query2[0].tpEventId == 10) {
            const valEvn6 = goodNumber;
            if (valEvn6 == 0) {
                const causeFinal = `-NO EXISTE EN UNA REMESA1`;
                const newId = (_a = (await this.entityComerRejected.query(`SELECT NEXTVAL('SEQ_COMER_BIENRECHAZADO')`))) !== null && _a !== void 0 ? _a : 1;
                if (query3[0].goodRejected == 0) {
                    this.entityComerRejected.save({
                        id: newId,
                        eventId,
                        goodNumber,
                        origin: cause,
                        causeFinal,
                        description: query1[0].description,
                        status: query1[0].status,
                    });
                    queryResult.created++;
                }
                else {
                    const existingObject = await this.entityComerRejected
                        .createQueryBuilder()
                        .select([`causa`])
                        .where(`no_bien = ${goodNumber}`)
                        .andWhere(`ID_EVENTO = ${eventId}`)
                        .getRawOne();
                    const { affected } = await this.entityComerRejected
                        .createQueryBuilder()
                        .update(comer_rejected_property_entity_1.ComerRejectedPropertyEntity)
                        .set({ cause: `${existingObject.causa}, ${causeFinal}` })
                        .where(`no_bien = ${goodNumber}`)
                        .andWhere(`ID_EVENTO = ${eventId}`)
                        .execute();
                    queryResult.updated = +affected;
                }
            }
        }
        else if (query2[0].tpEventId != 6 && query2[0].tpEventId == 10) {
            const valEvn6 = goodNumber;
            const sumValGood6 = valEvn6 == 0 ? 1 : 0;
            const cause = valEvn6 == 0 ? "- NO EXISTE EN UNA REMESA2" : "";
            const valEvn10 = goodNumber;
            const sumValGood10 = valEvn10 == 0 ? 1 : 0;
            const cause2 = valEvn10 == 0 ? "- NO EXISTE EN UN EVENTO DE PREPARACION" : "";
            const sumValFinal = sumValGood6 + sumValGood10;
            const causeFinal = `${cause} ${cause2}`;
            if (sumValFinal >= 1 && query3[0].goodRejected == 0) {
                const newId = (_b = (await this.entityComerRejected.query(`SELECT NEXTVAL('SEQ_COMER_BIENRECHAZADO')`))) !== null && _b !== void 0 ? _b : 1;
                this.entityComerRejected.save({
                    id: newId,
                    eventId,
                    goodNumber,
                    origin: cause,
                    causeFinal,
                    description: query1[0].description,
                    status: query1[0].status,
                });
                queryResult.created++;
            }
            else if (sumValFinal >= 1 && query3[0].goodRejected != 0) {
                const existingObject = await this.entityComerRejected
                    .createQueryBuilder()
                    .select([`causa`])
                    .where(`no_bien = ${goodNumber}`)
                    .andWhere(`ID_EVENTO = ${eventId}`)
                    .getRawOne();
                const { affected } = await this.entityComerRejected
                    .createQueryBuilder()
                    .update(comer_rejected_property_entity_1.ComerRejectedPropertyEntity)
                    .set({ cause: `${existingObject.causa}, ${causeFinal}` })
                    .where(`no_bien = ${goodNumber}`)
                    .andWhere(`ID_EVENTO = ${eventId}`)
                    .execute();
                queryResult.updated = +affected;
            }
        }
        return queryResult;
    }
    async paChangeStatusValidate() { }
};
PaProcessService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_events_entity_1.ComerEventEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(goods_entity_1.GoodsEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(comer_rejected_property_entity_1.ComerRejectedPropertyEntity)),
    __param(4, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(5, (0, nestjs_prometheus_1.InjectMetric)("pa_process_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], PaProcessService);
exports.PaProcessService = PaProcessService;
//# sourceMappingURL=pa-process.service.js.map