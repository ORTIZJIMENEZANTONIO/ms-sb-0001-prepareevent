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
exports.ComerCatCalendarEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerCatCalendarEntity = class ComerCatCalendarEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_estatus",
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], ComerCatCalendarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "descripcion",
        nullable: true,
        length: 200,
        default: () => "'S_DESC'",
    }),
    __metadata("design:type", String)
], ComerCatCalendarEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "color",
        nullable: true,
        length: 25,
        default: () => "'#FFFFFF'",
    }),
    __metadata("design:type", String)
], ComerCatCalendarEntity.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "activo",
        length: 1,
        default: () => "'N'",
    }),
    __metadata("design:type", String)
], ComerCatCalendarEntity.prototype, "active", void 0);
ComerCatCalendarEntity = __decorate([
    (0, typeorm_1.Entity)("comer_catcalendar", { schema: "sera" })
], ComerCatCalendarEntity);
exports.ComerCatCalendarEntity = ComerCatCalendarEntity;
//# sourceMappingURL=comer-catcalendar.entity.js.map