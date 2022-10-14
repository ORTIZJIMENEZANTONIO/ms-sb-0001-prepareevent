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
exports.ComerEventEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let ComerEventEntity = class ComerEventEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "No. Evento" }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "id_evento",
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_tpevento", precision: 2, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "eventTpId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id_estatusvta", length: 4 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "statusVtaId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_proceso",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "processCve", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones",
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "direccion", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fec_fallo", nullable: true }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "failureDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lugar", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fec_evento", nullable: true }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "texto1", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "texto1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "texto2", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "texto2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "firmante", nullable: true, length: 50 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "firmante", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "firmante_cargo",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "firmanteCargo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "notas", nullable: true, length: 300 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "textofin3",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "textofin3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "textofin4",
        nullable: true,
        length: 4000,
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "textofin4", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "costo_base",
        nullable: true,
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "baseCost", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "num_base_vend",
        nullable: true,
        precision: 5,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "numBaseVend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usuario", nullable: true, length: 30 }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "mes", nullable: true, precision: 2, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "month", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "anio", nullable: true, precision: 4, scale: 0 }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "no_delegacion",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "delegationId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "fase_inmu",
        nullable: true,
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "faseInmu", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_tercerocomer",
        nullable: true,
        precision: 3,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "thirdId", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_notificacion", nullable: true }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "fechaNotificacion", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fecha_cierre_evento", nullable: true }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "eventClosingDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_tpsolaval",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerEventEntity.prototype, "tpsolavalId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "aplica_iva",
        nullable: true,
        length: 2,
        default: () => "'2'",
    }),
    __metadata("design:type", String)
], ComerEventEntity.prototype, "ivaApplies", void 0);
ComerEventEntity = __decorate([
    (0, typeorm_1.Entity)("comer_eventos", { schema: "sera" })
], ComerEventEntity);
exports.ComerEventEntity = ComerEventEntity;
//# sourceMappingURL=comer-events.entity.js.map