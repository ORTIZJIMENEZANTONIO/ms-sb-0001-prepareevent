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
exports.FileUtilService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const comer_events_entity_1 = require("../comer-events/entities/comer-events.entity");
const comer_batch_entity_1 = require("../comer-batch/entities/comer-batch.entity");
const comer_property_by_batch_entity_1 = require("../comer-property-by-batch/entities/comer-property-by-batch.entity");
const reference_1 = require("../../../shared/functions/reference");
const excel_1 = require("../../../shared/functions/excel");
let FileUtilService = class FileUtilService {
    constructor(entityGoodXLot, entityComerLot, entityComerEvent, logger, counter) {
        this.entityGoodXLot = entityGoodXLot;
        this.entityComerLot = entityComerLot;
        this.entityComerEvent = entityComerEvent;
        this.logger = logger;
        this.counter = counter;
    }
    async createThirdFile(fileName, eventNumber) {
        const query = this.entityGoodXLot.query(`
      SELECT
        coalesce(cat.cvman,'0') as cvman,
        LOT.LOTE_PUBLICO, 
        BXL.NO_BIEN, 
        coalesce(BXL.CANTIDAD, BIE.CANTIDAD) as CANTIDAD,
        coalesce(BXL.CAMPO1, BIE.DESCRIPCION) as DESCRIPCION,
        coalesce(BXL.CAMPO2, LOT.DESCRIPCION) as DESC_GENERICA, 
        BXL.CAMPO3, -- TIPO
        BXL.CAMPO4, -- MARCA
        BXL.CAMPO5, -- SUBMARCA
        BXL.CAMPO6, -- MODELO
        BXL.CAMPO7, -- NOSERIE
        BXL.CAMPO8, -- NOMOTOR
        BXL.CAMPO9, -- NODECABINA
        coalesce(ALM.DESCRIPCION,'DESCONOCIDA') as UBICA,
        BIE.ESTATUS,
        CASE WHEN CA.NO_TIPOBIEN_ALTERNO IN (5, 4, 3)  THEN 'VEHICULO' WHEN CA.NO_TIPOBIEN_ALTERNO = 7 THEN 'INMUEBLE'  else 'MERCANCIA' end as TIPOBIEN_ALTERNO,
        DRM.DESCRIPCION DELEGACAP,
        BXL.ID_EVENTO_REMESA REMESA,
        LOT.LOTE_PUBLICO LOTEREM,
        TO_CHAR(BXL.FECHA_CREACION,'DD/MM/YYYY') FECHA,
        BIE.UNIDAD,
        TO_CHAR(BXL.FECHA_CREACION,'DD/MM/YYYY') FECHA2,
        CASE WHEN (LOT.ID_ESTATUSVTA = 'PAG' OR LOT.ID_ESTATUSVTA = 'PAGE') THEN 'S' ELSE 'N' END as VENDIDO,
        EXP.NO_TRANSFERENTE,
        CAT.CLAVE,
        ERM.CVE_PROCESO,
        G.DESCRIPCION,
        DESC_SUBTIPO,
        DESC_SSUBTIPO,
        DESC_SSSUBTIPO,
        BIE.NO_CLASIF_BIEN                  
      FROM 
        sera.COMER_LOTES LOT, 
        sera.COMER_BIENESXLOTE BXL, 
        sera.EXPEDIENTES exp
        left outer join sera.CAT_TRANSFERENTE CAT on EXP.NO_TRANSFERENTE = CAT.NO_TRANSFERENTE, 
        sera.CAT_ALMACENES ALM
        right outer join sera.BIENES BIE on ALM.NO_ALMACEN = BIE.NO_ALMACEN,
        sera.CAT_DELEGACIONES DRM
        left outer join sera.COMER_EVENTOS ERM on ERM.NO_DELEGACION = DRM.NO_DELEGACION,
        sera.CAT_ETIQUETA_BIEN G,
        sera.V_TIPO_BIEN D, 
        ( SELECT 
            TAL.NO_TIPOBIEN_ALTERNO, 
            CTA.NO_CLASIFICACION_ALTERNA, 
            CTA.NO_CLASIF_BIEN
          FROM 
            sera.CLASIF_EN_TIPOBIEN_ALTERNO CTA,
            sera.TIPOBIEN_ALTERNO TAL
          WHERE CTA.NO_CLASIFICACION_ALTERNA = TAL.NO_CLASIFICACION_ALTERNA
             AND CTA.NO_CLASIFICACION_ALTERNA = 4
            AND CTA.NO_TIPOBIEN_ALTERNO      = TAL.NO_TIPOBIEN_ALTERNO
        ) CA
        right outer join sera.BIENES BIENES on CA.NO_CLASIF_BIEN = BIENES.NO_CLASIF_BIEN
      WHERE BIE.NO_CLASIF_BIEN          = D.NO_CLASIF_BIEN
        AND BIE.NO_ETIQUETA             = G.NO_ETIQUETA
        and LOT.ID_EVENTO               = ERM.ID_EVENTO
        AND BXL.ID_LOTE                 = LOT.ID_LOTE
        AND BIE.NO_BIEN                 = BXL.NO_BIEN
        AND BIE.NO_EXPEDIENTE           = EXP.NO_EXPEDIENTE
        and ERM.ID_EVENTO               = ${eventNumber}
        AND LOT.LOTE_PUBLICO            > 0
        AND ERM.ID_EVENTO               = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
        AND LOT.ID_EVENTO               = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
        AND LOT.ID_LOTE                 = sera.FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','L')
        AND DRM.ETAPA_EDO               = sera.FA_ETAPACREDA(BXL.FECHA_CREACION)
    `);
        const data = await query;
        return data.length > 0 ? excel_1.File.makeFile(data, fileName) : null;
    }
    async getGlobalParams() {
        const query = this.entityComerLot.query(`
    SELECT
      VALOR
    FROM
      sera.COMER_PARAMETROSMOD PAR
    WHERE
      PAR.PARAMETRO = 'IVA'
      AND PAR.DIRECCION = 'C'
    `);
        const params = await query;
        const num = 1 + params[0].valor / 100;
        return num !== null && num !== void 0 ? num : 1.15;
    }
    async createThirdBaseFile(fileName, eventNumber, bankName) {
        const queryForniture = await this.entityComerEvent.query(`
      SELECT 
        lot.referenciag, 
        lot.referencial,
        cat.cvman, lot.lote_publico base,
        lot.descripcion, 
        cat.clave,
        eve.cve_proceso,  clie.nom_razon,
        clie.rfc, clie.curp, clie.calle,
        clie.colonia, clie.delegacion,
        clie.estado, clie.cp, 
        clie.telefono, 
        clie.correoweb,
        clie.esta_id cve_estado
      FROM 
        sera.comer_eventos eve,
        sera.cat_transferente cat,
        sera.comer_clientes clie
        left join sera.comer_lotes lot on lot.id_cliente = clie.id_cliente
      WHERE eve.id_evento = ${eventNumber}
      AND eve.id_evento = lot.id_evento
      AND lot.lote_publico > 0
      AND cat.no_transferente = 541;`);
        const queryFornitureRef = await this.entityComerEvent.query(`
      SELECT 
        lot.referenciag as loRefg,            
        lot.referencial as loRefl,
        coalesce(cat.cvman,'000000') as loCvman,    
        lot.id_estatusvta as loStatus,
        lot.id_lote as loLot
      FROM
        sera.comer_eventos eve,
        sera.comer_lotes lot,
        sera.cat_transferente cat
      WHERE eve.id_evento = ${eventNumber}
      AND eve.id_evento = lot.id_evento
      AND lot.lote_publico > 0
      AND cat.no_transferente = 541;
    `);
        queryFornitureRef.map((el, index) => {
            if (el.loStatus == "PREP") {
                if (el.loRefg == null || el.loRefg == "") {
                    el.loRefg = reference_1.Reference.calculateReference(bankName, el.loLot, el.loCvman, "G");
                }
                if (el.loRefl == null || el.loRefl == "") {
                    el.loRefl = reference_1.Reference.calculateReference(bankName, el.loLot, el.loCvman, "L");
                }
                this.updateComerLot({ lotIdToUpdt: el.loLot }, { agReference: el.loRefg, referential: el.loRefl });
            }
        });
        return queryForniture.length > 0
            ? excel_1.File.makeFile(queryForniture, fileName)
            : null;
    }
    async calculateGoodPrice(params) {
        var _a;
        const { eventId, lotId } = params;
        const queryLots1 = this.entityComerLot
            .createQueryBuilder("lot")
            .select([
            "ID_LOTE as LOT_IDLOTE",
            "PRECIO_FINAL - IVA_LOTE as LOT_PRECIO",
            "coalesce(IVA_LOTE,0) as LOT_IVA",
            "VALOR_BASE as LOT_VB",
            "NUM_BIENES as LOT_NUMB",
            "PRECIO_FINAL as LOT_FINAL",
        ])
            .where(`ID_EVENTO = ${eventId}`)
            .andWhere(`LOTE_PUBLICO = coalesce(${lotId}, LOTE_PUBLICO)`)
            .orderBy("LOTE_PUBLICO");
        const lots1 = await queryLots1.getRawMany();
        const queryTpEvent = await this.entityComerEvent
            .createQueryBuilder()
            .select("ID_TPEVENTO", "tpEventId")
            .where(`ID_EVENTO  = ${eventId}`)
            .getRawOne();
        const n_ID_TPEVENT = (_a = queryTpEvent.tpEventId) !== null && _a !== void 0 ? _a : 1;
        const vat = await this.getGlobalParams();
        const G_IVA = n_ID_TPEVENT == 5 ? 1 : vat;
        const BIE_PCT = lots1[0].LOT_FINAL / lots1[0].LOT_VB || 1;
        const queryGood1 = this.entityGoodXLot
            .createQueryBuilder("bxl")
            .select([
            "id_bienxlote as BIE_BIEN",
            "coalesce(VALOR_BASE, 0.01) as BIE_PRECIO",
            "NO_BIEN as BIE_NOBIEN",
        ])
            .where(`ID_LOTE = :lot`, { lot: lots1[0].lot_idlote })
            .andWhere("coalesce(VALOR_BASE,0) >= 0")
            .orderBy("NO_BIEN");
        const goods1 = await queryGood1.getRawMany();
        console.log(lots1, goods1, G_IVA, n_ID_TPEVENT, BIE_PCT);
        return {};
    }
    async updateComerLot(comer, body) {
        const data = await this.entityComerLot.findOne({
            where: { lotId: comer.lotIdToUpdt },
        });
        if (data) {
            delete body.lotId;
            this.entityComerLot.merge(data, body);
            return this.entityComerLot.save(data);
        }
        return false;
    }
};
FileUtilService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comer_property_by_batch_entity_1.ComerGoodsXLotEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(comer_batch_entity_1.ComerLotsEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comer_events_entity_1.ComerEventEntity)),
    __param(3, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(4, (0, nestjs_prometheus_1.InjectMetric)("file_util_served")),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_1.Logger,
        prom_client_1.Counter])
], FileUtilService);
exports.FileUtilService = FileUtilService;
//# sourceMappingURL=file-util.service.js.map