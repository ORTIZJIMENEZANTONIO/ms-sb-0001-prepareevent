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
exports.ComerGoodsXLotEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ComerGoodsXLotEntity = class ComerGoodsXLotEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "No. bien por lote" }),
    (0, typeorm_1.Column)({
        name: "id_bienxlote",
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "goodsLotId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("numeric", { name: "no_bien", precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "goodsId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)("numeric", { name: "id_lote", precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "lotId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "valor_base",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "baseValue", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_avaluo_ref",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "valueReferential", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_final",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "iva_base",
        nullable: true,
        precision: 13,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "baseTax", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "iva_final",
        nullable: true,
        precision: 13,
        scale: 2,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "finalTax", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_iva",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "taxPercent", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo1", nullable: true, length: 1250 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo2", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo3", nullable: true, length: 75 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo4", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp4", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo5", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp5", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo6", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp6", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo7", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp7", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo8", nullable: true, length: 500 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp8", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "campo9", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "camp9", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "cantidad",
        nullable: true,
        precision: 19,
        scale: 3,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_almacen",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "storeNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_peritaje_jur",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "expertiseCve", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "empresa_valuadora",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "appraiserEnterprise", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_inventario",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "inventoryId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_sin_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "noTaxPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_app_iva",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "taxAppAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "monto_noapp_iva",
        nullable: true,
        precision: 15,
        scale: 2,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "taxAmountId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_ant",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "antStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fecha_avaluo", nullable: true }),
    __metadata("design:type", Date)
], ComerGoodsXLotEntity.prototype, "appraiserDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_calc",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "calcStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "precio_garantia",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "warrantyPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "estatus_comer",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "eatStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_transferente",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "transferenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "anticipo",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "advance", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "pctslote",
        nullable: true,
        precision: 12,
        scale: 9,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "lotPcts", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, name: "fecha_creacion", nullable: true }),
    __metadata("design:type", Date)
], ComerGoodsXLotEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_lote_comer",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "eatLotId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_evento_comer",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "eatEventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_evento_remesa",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "consignmentEventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_lote_remesa",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "consignmentLotId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_bienxlote_remesa",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "consignmentGoodsId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "vendido", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "sold", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "observation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_factura",
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "billId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "fecha_factura",
        nullable: true,
    }),
    __metadata("design:type", Date)
], ComerGoodsXLotEntity.prototype, "billDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "seleccionado",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "selected", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "anexo", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "annex", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_cilindros",
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "cylindersId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "procedencia",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "pais_procedencia",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "originCountry", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion_lote",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "loteDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_delegacionrem",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "delegationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones_2",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "observations2", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_avaluo",
        nullable: true,
        precision: 15,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerGoodsXLotEntity.prototype, "appraisalId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "a_iva", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerGoodsXLotEntity.prototype, "taxA", void 0);
ComerGoodsXLotEntity = __decorate([
    (0, typeorm_1.Entity)("comer_bienesxlote", { schema: "sera" })
], ComerGoodsXLotEntity);
exports.ComerGoodsXLotEntity = ComerGoodsXLotEntity;
//# sourceMappingURL=comer-property-by-batch.entity.js.map