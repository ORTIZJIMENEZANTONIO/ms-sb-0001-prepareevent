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
exports.GoodAtribMalEntity = void 0;
const typeorm_1 = require("typeorm");
let GoodAtribMalEntity = class GoodAtribMalEntity {
};
__decorate([
    (0, typeorm_1.Column)('numeric', {
        primary: true,
        name: 'no_bien',
        precision: 10,
        scale: 0,
    }),
    __metadata("design:type", Number)
], GoodAtribMalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { primary: true, name: 'motivo', length: 1000 }),
    __metadata("design:type", String)
], GoodAtribMalEntity.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { primary: true, name: 'par1', precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], GoodAtribMalEntity.prototype, "par1", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { primary: true, name: 'par2', precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], GoodAtribMalEntity.prototype, "par2", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'par3', nullable: true, length: 30 }),
    __metadata("design:type", String)
], GoodAtribMalEntity.prototype, "par3", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'par4', nullable: true, precision: 10, scale: 0 }),
    __metadata("design:type", Number)
], GoodAtribMalEntity.prototype, "par4", void 0);
GoodAtribMalEntity = __decorate([
    (0, typeorm_1.Entity)('bien_atrib_mal', { schema: 'sera' })
], GoodAtribMalEntity);
exports.GoodAtribMalEntity = GoodAtribMalEntity;
//# sourceMappingURL=good-atrib-mal.entity.js.map