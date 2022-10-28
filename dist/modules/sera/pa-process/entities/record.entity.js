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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordEntity = void 0;
const typeorm_1 = require("typeorm");
let RecordEntity = class RecordEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'no_expediente',
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_acuerdo_aseg', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "agreementAsegDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'prevision', nullable: true, length: 1 }),
    __metadata("design:type", String)
], RecordEntity.prototype, "foresight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_prevision', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "foresightDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'articulo_validado',
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "validatedItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_fe_ministerial', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "ministerialFeDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acta_fe_ministerial',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "ministerialFeAct", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_dictamina', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "dictumDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_bateria',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "bateryNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_casillero',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "lockerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_estante',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "shelfNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_juzgado',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "judgedNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'observaciones_prevision',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "foresighttObservation", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'insertado_por',
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "insertedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'observaciones',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'metodo_insercion',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "insertMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_insercion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "insertDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_recepcion_sera', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "seraReceptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'causa_penal',
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "penaltyCause", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'averiguacion_previa',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "preliminaryInquiry", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_amparo',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "shelterKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_delito',
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "crimeKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acta_circunstanciada',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_toca_penal',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "penaltyTocaKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_institucion',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "institutionName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_juzgado',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "judgeName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_mp',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "mpName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_guardavalor',
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "valueSaveKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_indiciado',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "indicatedName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'autoridad_ordena_dictamen',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "dictumOrderAuthority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_notificacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "notifyDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'notificado_a',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "notifyA", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'lugar_notificacion',
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "notifyPlace", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_decomiso_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "confiscationRulerDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_devolucion_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "returnRulerDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_enajenacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "alienationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_entfed',
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "entfedKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_recrev_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "rulerRecrevDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'no_registro', nullable: true }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_destruccion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "destructionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_donacion', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "donationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_acuerdo_inicial', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "initialAgreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acuerdo_inicial',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "initialAgreement", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'estatus_expediente',
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'identificador',
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'es_delit', nullable: true, length: 1 }),
    __metadata("design:type", String)
], RecordEntity.prototype, "esDelit", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_transferente',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "transferentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'no_exp_transferentes',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "expTransferentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'tipo_expediente',
        nullable: true,
        length: 2,
    }),
    __metadata("design:type", String)
], RecordEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_emisora',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "senderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_autoridad',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "authorityNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_insercion_hc', nullable: true }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "insertHcDate", void 0);
RecordEntity = __decorate([
    (0, typeorm_1.Entity)('expedientes', { schema: 'sera' })
], RecordEntity);
exports.RecordEntity = RecordEntity;
//# sourceMappingURL=record.entity.js.map