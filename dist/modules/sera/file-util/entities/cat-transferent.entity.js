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
exports.CatTransferentEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CatTransferentEntity = class CatTransferentEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Identificador del transferente" }),
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: "no_transferente",
    }),
    __metadata("design:type", Number)
], CatTransferentEntity.prototype, "transferentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "desc_transferente",
        nullable: true,
        length: 150,
    }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "transferentDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "clave", nullable: true, length: 20 }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "keyCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cvman", nullable: true, length: 6 }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "cvman", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "indcap", nullable: true, length: 2 }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "indcap", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", {
        name: "porc_comi",
        nullable: true,
        precision: 5,
        scale: 2,
    }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "porcComi", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "activo", nullable: true, precision: 1, scale: 0 }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "riesgo", nullable: true, length: 2 }),
    __metadata("design:type", String)
], CatTransferentEntity.prototype, "risk", void 0);
CatTransferentEntity = __decorate([
    (0, typeorm_1.Entity)("cat_transferente", { schema: "sera" })
], CatTransferentEntity);
exports.CatTransferentEntity = CatTransferentEntity;
//# sourceMappingURL=cat-transferent.entity.js.map