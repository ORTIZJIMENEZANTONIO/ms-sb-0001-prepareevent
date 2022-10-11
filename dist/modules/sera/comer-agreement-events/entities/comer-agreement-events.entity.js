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
exports.ComerConvEventEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerConvEventEntity = class ComerConvEventEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_evento",
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "no_evento_convocatoria",
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "noAnnouncementEvent", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fechas", nullable: true, length: 70 }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "dates", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "horario", nullable: true, length: 70 }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lugar", nullable: true, length: 200 }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "restriccion",
        nullable: true,
        length: 500,
    }),
    __metadata("design:type", String)
], ComerConvEventEntity.prototype, "restriction", void 0);
ComerConvEventEntity = __decorate([
    (0, typeorm_1.Entity)("comer_conv_eventos", { schema: "sera" })
], ComerConvEventEntity);
exports.ComerConvEventEntity = ComerConvEventEntity;
//# sourceMappingURL=comer-agreement-events.entity.js.map