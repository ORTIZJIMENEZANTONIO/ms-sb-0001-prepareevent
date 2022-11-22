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
exports.TmpEventsComerEntity = void 0;
const typeorm_1 = require("typeorm");
let TmpEventsComerEntity = class TmpEventsComerEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_evento",
    }),
    __metadata("design:type", String)
], TmpEventsComerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cve_proceso",
        nullable: true,
        length: 120,
    }),
    __metadata("design:type", String)
], TmpEventsComerEntity.prototype, "processKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", name: "fec_fallo", nullable: true }),
    __metadata("design:type", Date)
], TmpEventsComerEntity.prototype, "failDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_tpevento",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TmpEventsComerEntity.prototype, "tpeventId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "direccion",
        length: 1,
    }),
    __metadata("design:type", String)
], TmpEventsComerEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "lugar",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], TmpEventsComerEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "id_estatusvta",
        nullable: true,
        length: 4,
    }),
    __metadata("design:type", String)
], TmpEventsComerEntity.prototype, "statusVtaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", name: "fecha_evento", nullable: true }),
    __metadata("design:type", Date)
], TmpEventsComerEntity.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_tpeventoaf",
        precision: 2,
        scale: 0,
    }),
    __metadata("design:type", Number)
], TmpEventsComerEntity.prototype, "atTpeventId", void 0);
TmpEventsComerEntity = __decorate([
    (0, typeorm_1.Entity)("tmp_eventos_comer", { schema: "comer" })
], TmpEventsComerEntity);
exports.TmpEventsComerEntity = TmpEventsComerEntity;
//# sourceMappingURL=tmp-events-comer.entity.js.map