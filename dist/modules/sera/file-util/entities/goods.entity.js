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
exports.GoodsEntity = void 0;
const typeorm_1 = require("typeorm");
let GoodsEntity = class GoodsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: "no_bien",
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_inventario",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "inventoryNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "cantidad",
        nullable: true,
        precision: 19,
        scale: 3,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_entrada", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "dateIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_salida", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "dateOut", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_vencim", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "expireDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_ubicacion",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "ubicationType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estatus", nullable: true, length: 3 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val1", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val2", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val3", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val4", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val4", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val5", nullable: true, length: 160 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val5", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val6", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val6", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val7", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val7", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val8", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val8", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val9", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val9", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val10", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val10", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val11", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val11", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val12", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val12", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val13", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val13", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val14", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val14", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val15", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val15", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val16", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val16", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val17", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val17", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val18", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val18", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val19", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val19", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val20", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val20", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val21", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val21", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val22", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val22", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val23", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val23", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val24", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val24", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val25", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val25", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val26", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val26", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val27", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val27", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val28", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val28", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val29", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val29", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val30", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val30", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val31", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val31", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val32", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val32", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val33", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val33", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val34", nullable: true, length: 500 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val34", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val35", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val35", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val36", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val36", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val37", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val37", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val38", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val38", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val39", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val39", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val40", nullable: true, length: 80 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val40", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "clasificacion_bien",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "goodCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "senalamientos_origen",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "originSignals", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "sol_inscr_registro",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "registerInscrSol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_dictamen", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "dateOpinion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "perito_dictamen",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "proficientOpinion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "valuador_dictamen",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "valuerOpinion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "dictamen",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "opinion", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "valor_avaluo",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "appraisedValue", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_gaveta",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "drawerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_boveda",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "vaultNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_bien_referencia",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "goodReferenceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_moneda_avaluo",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "appraisalCurrencyKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_avaluo_vig", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "appraisalVigDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "aprob_dest_legal",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "legalDestApprove", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_aprobo_dest_legal",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "legalDestApproveUsr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_aprobo_dest_legal", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "legalDestApproveDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_cumplimiento_abandono", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "complianceLeaveDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_notificacion_abandono", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "complianceNotifyDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones_abandono",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "leaveObservations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_conf_abandono_judicial", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "judicialLeaveDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_notificacion", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "notifyDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "notificado_a",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "notifyA", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "lugar_notificacion",
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "placeNotify", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Date,
        name: "fec_res_desecha_desech_rec_rev",
        nullable: true,
    }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "discardRevRecDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Date,
        name: "fec_emision_resolucion_rec_rev",
        nullable: true,
    }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "resolutionEmissionRecRevDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_acuerdo_admisorio_rec_rev", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "admissionAgreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_audiencia_rec_rev", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "audienceRevRecDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones_rec_rev",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "revRecObservations", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "motivo_abandono",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "leaveCause", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "resolucion",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "resolution", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_incosteabilidad", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "fecUnaffordability", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "criterio_incosteabilidad",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "unaffordabilityJudgment", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_aprobo_utilizacion",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "userApproveUse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_aprobo_utilizacion", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "useApproveDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones_utilizacion",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "useObservations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_solic_cambio_numerario", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "dateRequestChangeNumerary", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_solic_cambio_numerario",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "numberChangeRequestUser", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "motivo_cambio_numerario",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "causeNumberChange", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "solicito_cambio_numerario",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "changeRequestNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_autoriza_cambio_numerario", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "authNumberChangeDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_autoriza_cambio_numera",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "authChangeNumberUser", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "autoriza_cambio_numerario",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "authChangeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_ratifica_cambio_numerario", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "numberChangeRatifiesDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_ratifica_cambio_numera",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "numberChangeRatifiesUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_notificacion_rec_rev", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "notifyRevRecDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "motivo_rec_rev",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "revRecCause", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "acuerdo_inicial",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "initialAgreement", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones",
        nullable: true,
        length: 600,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_expediente",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "fileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_exp_asociado",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "associatedFileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_rack",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "rackNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_almacen",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "storeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_lote",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "lotNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "no_clasif_bien", precision: 5, scale: 0 }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "goodClassNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_subdelegacion",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "subDelegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_delegacion",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "delegationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_recepcion_fisica", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "physicalReceptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_recurso_revision",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "statusResourceReview", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_judicial", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "judicialDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_vencimiento_abandono", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "abandonmentDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_aprobo_destruccion", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "destructionApproveDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_aprobo_destruccion",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "destructionApproveUser", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones_destruccion",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "observationDestruction", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_destino",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "destinyNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "no_registro", nullable: true }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "registryNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_acuerdo_aseg", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "agreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "tipo_dictamen",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "opinionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_presentacion", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "presentationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_subsana_rec_rev", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "revRecRemedyDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_recepcion",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "receptionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usuario_promovente_deco_devo",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "promoterUserDecoDevo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_programada_x_deco_devo", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "scheduledDateDecoDev", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_bien_padre_parcializacion",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "goodsPartializationFatherNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "declaracion_abn_sera",
        nullable: true,
        length: 1000,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "seraAbnDeclaration", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "identificador",
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "identifier", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "id_inventari_siabi",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "siabiInventoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "id_inmueble_cisi",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "cisiPropertyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "id_invactual_siabi",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "siabiInvalidId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fecha_tesofe", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "tesofeDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "folio_tesofe",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "tesofeFolio", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "situacion",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "situation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val41", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val41", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val42", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val42", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val43", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val43", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val44", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val44", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val45", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val45", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val46", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val46", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val47", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val47", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val48", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val48", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val49", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val49", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "val50", nullable: true, length: 200 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "val50", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_etiqueta",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "labelNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_volante",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "flyerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_reg_insert", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "insertRegDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "visportal",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "visportal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "unidad", nullable: true, length: 10 }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "valor_referencia",
        nullable: true,
        precision: 18,
        scale: 3,
    }),
    __metadata("design:type", Number)
], GoodsEntity.prototype, "referenceValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fec_reg_insert_hc", nullable: true }),
    __metadata("design:type", Date)
], GoodsEntity.prototype, "insertHcDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "proceso_ext_dom",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], GoodsEntity.prototype, "extDomProcess", void 0);
GoodsEntity = __decorate([
    (0, typeorm_1.Entity)("bienes", { schema: "sera" })
], GoodsEntity);
exports.GoodsEntity = GoodsEntity;
//# sourceMappingURL=goods.entity.js.map