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
exports.ComerGoodsCol = void 0;
const typeorm_1 = require("typeorm");
let ComerGoodsCol = class ComerGoodsCol {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("numeric", { name: "no_clasif_bien", primary: false }),
    __metadata("design:type", String)
], ComerGoodsCol.prototype, "goodClassificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "desc_atributo",
        nullable: true,
        length: 30,
    }),
    __metadata("design:type", String)
], ComerGoodsCol.prototype, "descriptionAttribute", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "b_val", nullable: true, length: 30 }),
    __metadata("design:type", String)
], ComerGoodsCol.prototype, "bVal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cb_col", nullable: true, length: 30 }),
    __metadata("design:type", String)
], ComerGoodsCol.prototype, "cbCol", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "direccion", nullable: true, length: 1 }),
    __metadata("design:type", String)
], ComerGoodsCol.prototype, "address", void 0);
ComerGoodsCol = __decorate([
    (0, typeorm_1.Entity)("comer_bienescol", { schema: "sera" })
], ComerGoodsCol);
exports.ComerGoodsCol = ComerGoodsCol;
//# sourceMappingURL=comer-good-col.entity.js.map