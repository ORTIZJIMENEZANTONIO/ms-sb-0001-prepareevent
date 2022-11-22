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
exports.ComerEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerEventDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "eventTpId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(4, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 4 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "statusVtaId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(60, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 60 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "processKey", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(300, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 300 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "observations", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(1, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 1 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerEventDto.prototype, "failureDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(100, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 100 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "place", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerEventDto.prototype, "eventDate", void 0);
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
], ComerEventDto.prototype, "text1", void 0);
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
], ComerEventDto.prototype, "text2", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(50, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 50 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "signatory", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(50, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 50 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "signatoryPosition", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(300, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 300 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "notes", void 0);
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
], ComerEventDto.prototype, "endText3", void 0);
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
], ComerEventDto.prototype, "endText4", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "baseCost", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "baseVendNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(30, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 30 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(12, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "month", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(9999, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "year", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(999, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "delegationNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(99, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "phaseInmu", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(999, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "thirdId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerEventDto.prototype, "notificationDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerEventDto.prototype, "eventClosingDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(9999999999, {
        message: message_1.Message.MAX("$property", "$constraint1"),
    }),
    __metadata("design:type", Number)
], ComerEventDto.prototype, "tpsolavalId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(2, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 2 }),
    __metadata("design:type", String)
], ComerEventDto.prototype, "vatApplies", void 0);
exports.ComerEventDto = ComerEventDto;
//# sourceMappingURL=comer-events.dto.js.map