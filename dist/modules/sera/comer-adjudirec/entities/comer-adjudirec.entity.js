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
exports.ComerAdjudirecEntity = void 0;
const typeorm_1 = require("typeorm");
let ComerAdjudirecEntity = class ComerAdjudirecEntity {
};
__decorate([
    (0, typeorm_1.Column)("numeric", {
        primary: true,
        name: "id_evento",
        precision: 7,
        scale: 0,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "comite", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "committee", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fec_sesion", nullable: true }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "sessionDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "no_sesion",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "noSession", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_elabora",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "creationUser", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_propone",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "userWhoProposed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_formula",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "userWhoFormulated", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cond_fisica",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "physicalCondition", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "observaciones",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "observation", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "valudi", nullable: true, precision: 6, scale: 3 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "valudi", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "montoudis",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "amountDis", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "licitado", nullable: true, length: 2 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "tendered", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "fechaudi", nullable: true }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "udiDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "formapago",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "wayToPay", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "texto1", nullable: true, length: 800 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "text1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "texto2", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "text2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "texto3", nullable: true, length: 1500 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "text3", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "fec_recep",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "receptionDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "val_libros",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "bookValue", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "valmaxudi",
        nullable: true,
        precision: 15,
        scale: 2,
    }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "valMaxUdi", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "causa", nullable: true, length: 100 }),
    __metadata("design:type", String)
], ComerAdjudirecEntity.prototype, "cause", void 0);
ComerAdjudirecEntity = __decorate([
    (0, typeorm_1.Entity)("comer_adjudirec", { schema: "sera" })
], ComerAdjudirecEntity);
exports.ComerAdjudirecEntity = ComerAdjudirecEntity;
//# sourceMappingURL=comer-adjudirec.entity.js.map