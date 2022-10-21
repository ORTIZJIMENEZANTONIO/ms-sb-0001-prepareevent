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
exports.ComerAdjudirecDto = void 0;
const class_validator_1 = require("class-validator");
class ComerAdjudirecDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ComerAdjudirecDto.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "committee", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "sessionDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "noSession", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "creationUser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "userWhoProposed", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "userWhoFormulated", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "physicalCondition", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "observation", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerAdjudirecDto.prototype, "valudi", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerAdjudirecDto.prototype, "amountDis", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "tendered", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "udiDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "wayToPay", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "text1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "text2", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "text3", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "receptionDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "bookValue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ComerAdjudirecDto.prototype, "valMaxUdi", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ComerAdjudirecDto.prototype, "cause", void 0);
exports.ComerAdjudirecDto = ComerAdjudirecDto;
//# sourceMappingURL=comer-adjudirec.dto.js.map