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
exports.ComerLotsDto = void 0;
const class_validator_1 = require("class-validator");
const custom_validator_1 = require("../../../../shared/custom-validators/custom-validator");
class ComerLotsDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "saleStatusId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "publicLot", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1250),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "baseValue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "transferenceNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "appraisalPriceRef", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "warrantyPrice", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Date)
], ComerLotsDto.prototype, "deliveryDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "finalPrice", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "referenceG", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "referential", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "accumulated", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "systemValid", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "lotVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "amountAppVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "amountNoAppVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "vatAppPercentage", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "vatNoAppPercentage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "regCoordination", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "regCoordinator", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "fiscMandFact", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "ubication", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "advance", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "amountWithoutVat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "notifyOfficeNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "notifyPrint", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "statusVtantId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "goodsNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "faultExceeds", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "assignedEs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "scrapEs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "request", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "withheldAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "delegationNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "originLot", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "lotCover", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "palette", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "assignedWarranty", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "liqAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "phase", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "partialitiesNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "percentPoints", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", Number)
], ComerLotsDto.prototype, "advancePercent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.IsOptional)(),
    (0, custom_validator_1.IsNullable)(),
    __metadata("design:type", String)
], ComerLotsDto.prototype, "vatA", void 0);
exports.ComerLotsDto = ComerLotsDto;
//# sourceMappingURL=comer-batch.dto.js.map