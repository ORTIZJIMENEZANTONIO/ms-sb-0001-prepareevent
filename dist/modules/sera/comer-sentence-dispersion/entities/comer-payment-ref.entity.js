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
exports.ComerPaymentReferenceEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerPaymentReferenceEntity = class ComerPaymentReferenceEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("numeric", {
        name: "id_pago",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("character varying", {
        name: "referencia",
        length: 30,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("numeric", {
        name: "no_movimiento",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "movementNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { primary: true, name: "fecha" }),
    __metadata("design:type", Date)
], ComerPaymentReferenceEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "monto", precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "cve_banco", length: 10 }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "bankKey", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "codigo", nullable: true, precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_lote",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "lotId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "valido_sistema",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "validSystem", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "noentiempo",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "noenTime", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tipo", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "idordeningreso",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "orderIngressId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "resultado",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "sucursal",
        nullable: true,
        precision: 6,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "branchOffice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_pagodevuelve",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "paymentReturnId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "conciliado",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "reconciled", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_registro", nullable: true }),
    __metadata("design:type", Date)
], ComerPaymentReferenceEntity.prototype, "registryDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "referenciaori",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "urlReference", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cuenta", nullable: true, length: 20 }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_oi", nullable: true }),
    __metadata("design:type", Date)
], ComerPaymentReferenceEntity.prototype, "oiDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "aplicadoa", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerPaymentReferenceEntity.prototype, "applyTo", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_cliente",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "folio_oi",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "oiFolio", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "indicador",
        nullable: true,
        precision: 1,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "indicator", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "codigo_edo_cta",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "codeStateCta", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_afectacion", nullable: true }),
    __metadata("design:type", Date)
], ComerPaymentReferenceEntity.prototype, "affectationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "no_registro", nullable: true }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "registerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_tipo_sat",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "typeSatId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_gasto",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "spentId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_solicitudpago",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerPaymentReferenceEntity.prototype, "paymentRequestId", void 0);
ComerPaymentReferenceEntity = __decorate([
    (0, typeorm_1.Entity)("comer_pagoref", { schema: "sera" })
], ComerPaymentReferenceEntity);
exports.ComerPaymentReferenceEntity = ComerPaymentReferenceEntity;
//# sourceMappingURL=comer-payment-ref.entity.js.map