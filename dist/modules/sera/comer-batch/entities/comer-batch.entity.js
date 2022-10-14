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
exports.ComerLotsEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerLotsEntity = class ComerLotsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "id_lote",
    }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "lotId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id_estatusvta", length: 4 }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "idEstatusvta", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_evento", precision: 7, scale: 0 }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "lote_publico", precision: 8, scale: 0 }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "publicLot", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "valor_base", precision: 33, scale: 2 }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "valorBase", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_transferente",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "noTransferente", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_cliente",
        nullable: true,
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_avaluo_ref",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "precioAvaluoRef", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_garantia",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "precioGarantia", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_entrega",
        nullable: true,
    }),
    __metadata("design:type", Date)
], ComerLotsEntity.prototype, "fechaEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "precioFinal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "referenciag",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "referenciag", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "referencial",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "referencial", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "acumulado",
        nullable: true,
        precision: 15,
        scale: 2,
        default: () => "0",
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "acumulado", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "valido_sistema",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "validoSistema", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "iva_lote",
        nullable: true,
        precision: 11,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "ivaLote", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_app_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "montoAppIva", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_noapp_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "montoNoappIva", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_app_iva",
        nullable: true,
        precision: 12,
        scale: 9,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "porcAppIva", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_noapp_iva",
        nullable: true,
        precision: 12,
        scale: 9,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "porcNoappIva", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "coordinacion_reg",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "coordinacionReg", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "coordinador_reg",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "coordinadorReg", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "dato_fisc_mand",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "datoFiscMand", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "ubicacion",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "anticipo",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "anticipo", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_sin_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "montoSinIva", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "nooficionotifica",
        nullable: true,
        precision: 6,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "nooficionotifica", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "imprimenotifica",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "imprimenotifica", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "idestatusvtant",
        nullable: true,
        length: 4,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "idestatusvtant", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "num_bienes",
        nullable: true,
        precision: 6,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "numBienes", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "excede_falta",
        nullable: true,
        precision: 15,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "excedeFalta", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "esasignado",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "esasignado", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "eschatarra",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "eschatarra", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "solicita", nullable: true, length: 60 }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "solicita", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_retenido",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "montoRetenido", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_delegacion",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "noDelegacion", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "lote_origen",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "loteOrigen", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "cubrelotes",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "cubrelotes", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "paleta",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "paleta", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "garantia_asig",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "garantiaAsig", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "monto_liq",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], ComerLotsEntity.prototype, "montoLiq", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "fase", nullable: true, precision: 2, scale: 0 }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "fase", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_parcialidades",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "noParcialidades", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "puntos_porcen",
        nullable: true,
        precision: 4,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "puntosPorcen", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_anticipo",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "porcAnticipo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "a_iva", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerLotsEntity.prototype, "aIva", void 0);
ComerLotsEntity = __decorate([
    (0, typeorm_1.Entity)("comer_lotes", { schema: "sera" })
], ComerLotsEntity);
exports.ComerLotsEntity = ComerLotsEntity;
//# sourceMappingURL=comer-batch.entity.js.map