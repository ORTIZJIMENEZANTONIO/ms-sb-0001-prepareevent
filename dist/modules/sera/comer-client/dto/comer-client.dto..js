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
exports.ComerClientDto = void 0;
const class_validator_1 = require("class-validator");
class ComerClientDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "reasonName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "rfc", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "sellerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(8),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "colony", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(49),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "delegacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(6),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "cp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(22),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "fax", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "mailWeb", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(31),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "curp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "blackList", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "paternalSurname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "maternalSurname", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "muniId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "estaId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "blackListDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "releaseDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "penaltyId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "personType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "approvedRfc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "userFree", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "freeDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "registerId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "economicActCve", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "identificationType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "identificationNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "agentId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "outsideNo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "insisdeNo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(18),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "interbankKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "bank", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "branch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "checksAccount", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "penaltyInDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "penaltyOutDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerClientDto.prototype, "penalizeUser", void 0);
exports.ComerClientDto = ComerClientDto;
//# sourceMappingURL=comer-client.dto..js.map