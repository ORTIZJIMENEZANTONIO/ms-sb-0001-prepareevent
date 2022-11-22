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
exports.ComerRejectedGoodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerRejectedGoodDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "eventId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "propertyNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(15, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 15 }),
    __metadata("design:type", String)
], ComerRejectedGoodDto.prototype, "origin", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(1250, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 1250 }),
    __metadata("design:type", String)
], ComerRejectedGoodDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(6, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 6 }),
    __metadata("design:type", String)
], ComerRejectedGoodDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(4000, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 4000 }),
    __metadata("design:type", String)
], ComerRejectedGoodDto.prototype, "cause", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "event", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "batchPublic", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.Max)(9, {
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "rejectedReason", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerRejectedGoodDto.prototype, "batchOrigin", void 0);
exports.ComerRejectedGoodDto = ComerRejectedGoodDto;
//# sourceMappingURL=comer-rejected-property.dto.js.map