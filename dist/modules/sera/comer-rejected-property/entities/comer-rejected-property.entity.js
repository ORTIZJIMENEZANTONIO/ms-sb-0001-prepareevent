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
exports.ComerRejectedPropertyEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerRejectedPropertyEntity = class ComerRejectedPropertyEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_bienrechazado",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "rejectedGoodId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_evento", precision: 7, scale: 0 }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "no_bien", precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "noProperty", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "origen", nullable: true, length: 15 }),
    __metadata("design:type", String)
], ComerRejectedPropertyEntity.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 1250,
    }),
    __metadata("design:type", String)
], ComerRejectedPropertyEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "estatus", nullable: true, length: 6 }),
    __metadata("design:type", String)
], ComerRejectedPropertyEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "causa", nullable: true, length: 4000 }),
    __metadata("design:type", String)
], ComerRejectedPropertyEntity.prototype, "cause", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "evento",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "lote_publico",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "batchPublic", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "rechazadopor",
        nullable: true,
        precision: 1,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "rejectedReason", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "lote_origen",
        nullable: true,
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerRejectedPropertyEntity.prototype, "batchOrigin", void 0);
ComerRejectedPropertyEntity = __decorate([
    (0, typeorm_1.Entity)("comer_bienesrechazados", { schema: "sera" })
], ComerRejectedPropertyEntity);
exports.ComerRejectedPropertyEntity = ComerRejectedPropertyEntity;
//# sourceMappingURL=comer-rejected-property.entity.js.map