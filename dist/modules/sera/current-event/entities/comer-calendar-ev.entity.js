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
exports.ComerCalendarevEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerCalendarevEntity = class ComerCalendarevEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_calendar",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerCalendarevEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "id_evento", precision: 7, scale: 0 }),
    __metadata("design:type", Number)
], ComerCalendarevEntity.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "id_estatus",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerCalendarevEntity.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "dia",
        nullable: true,
        precision: 3,
        scale: 0,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], ComerCalendarevEntity.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "mes",
        nullable: true,
        precision: 3,
        scale: 0,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], ComerCalendarevEntity.prototype, "month", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "anio",
        nullable: true,
        precision: 5,
        scale: 0,
        default: () => "2000",
    }),
    __metadata("design:type", Number)
], ComerCalendarevEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "rango_dias",
        nullable: true,
        precision: 3,
        scale: 0,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], ComerCalendarevEntity.prototype, "daysRange", void 0);
ComerCalendarevEntity = __decorate([
    (0, typeorm_1.Index)("comer_calendarev_pk", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("comer_calendarev", { schema: "sera" })
], ComerCalendarevEntity);
exports.ComerCalendarevEntity = ComerCalendarevEntity;
//# sourceMappingURL=comer-calendar-ev.entity.js.map