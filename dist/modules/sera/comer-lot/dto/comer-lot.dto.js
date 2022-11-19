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
exports.ComerLotDto = void 0;
const class_validator_1 = require("class-validator");
const custom_validator_1 = require("../../../../shared/custom-validators/custom-validator");
class ComerLotDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "statusVtaId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "publicLot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1250),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "baseValue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "transferenceNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "appraisalPriceRef", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "warrantyPrice", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Date)
], ComerLotDto.prototype, "deliveryDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "finalPrice", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "referenceG", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "referential", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "accumulated", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "systemValid", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "lotVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountAppVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountNoAppVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "vatAppPercentage", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "vatNoAppPercentage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "regCoordination", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "regCoordinator", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "fiscMandFact", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "ubication", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "advance", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountWithoutVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "notifyOfficeNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "notifyPrint", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "statusVtantId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "goodsNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "faultExceeds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "assignedEs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "scrapEs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "request", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "withheldAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "delegationNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "originLot", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "lotCover", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "palette", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "assignedWarranty", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "liqAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "phase", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "partialitiesNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "percentPoints", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "advancePercent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotDto.prototype, "vatA", void 0);
exports.ComerLotDto = ComerLotDto;
//# sourceMappingURL=comer-lot.dto.js.map