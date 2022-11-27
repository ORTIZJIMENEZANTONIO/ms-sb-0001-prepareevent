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
exports.FilesEntity = void 0;
const typeorm_1 = require("typeorm");
let FilesEntity = class FilesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'no_expediente',
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_acuerdo_aseg', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "agreementAsegDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'prevision', nullable: true, length: 1 }),
    __metadata("design:type", String)
], FilesEntity.prototype, "foresight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_prevision', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "foresightDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'articulo_validado',
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "validatedItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_fe_ministerial', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "ministerialFeDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acta_fe_ministerial',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "ministerialFeAct", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_dictamina', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "dictumDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_bateria',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "bateryNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_casillero',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "lockerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_estante',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "shelfNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_juzgado',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "judgedNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'observaciones_prevision',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "foresighttObservation", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'insertado_por',
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "insertedBy", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'observaciones',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'metodo_insercion',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "insertMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_insercion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "insertDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_recepcion_sera', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "seraReceptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'causa_penal',
        nullable: true,
        length: 40,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "penaltyCause", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'averiguacion_previa',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "preliminaryInquiry", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_amparo',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "shelterKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_delito',
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "crimeKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acta_circunstanciada',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "circumstantialRecord", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_toca_penal',
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "penaltyTocaKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_institucion',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "institutionName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_juzgado',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "judgeName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_mp',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "mpName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_guardavalor',
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "valueSaveKey", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nombre_indiciado',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "indicatedName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'autoridad_ordena_dictamen',
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "dictumOrderAuthority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_notificacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "notifyDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'notificado_a',
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "notifyA", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'lugar_notificacion',
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "notifyPlace", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_decomiso_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "confiscationRulerDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_devolucion_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "returnRulerDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_enajenacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "alienationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'cve_entfed',
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "entfedKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_recrev_dictaminacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "rulerRecrevDate", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'no_registro', nullable: true }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_destruccion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "destructionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_donacion', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "donationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_acuerdo_inicial', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "initialAgreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'acuerdo_inicial',
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "initialAgreement", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'estatus_expediente',
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'identificador',
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'es_delit', nullable: true, length: 1 }),
    __metadata("design:type", String)
], FilesEntity.prototype, "esDelit", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_transferente',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "transferentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'no_exp_transferentes',
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "expTransferentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'tipo_expediente',
        nullable: true,
        length: 2,
    }),
    __metadata("design:type", String)
], FilesEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_emisora',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "senderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'no_autoridad',
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], FilesEntity.prototype, "authorityNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: 'fec_insercion_hc', nullable: true }),
    __metadata("design:type", Date)
], FilesEntity.prototype, "insertHcDate", void 0);
FilesEntity = __decorate([
    (0, typeorm_1.Entity)('expedientes', { schema: 'sera' })
], FilesEntity);
exports.FilesEntity = FilesEntity;
//# sourceMappingURL=record.entity.js.map