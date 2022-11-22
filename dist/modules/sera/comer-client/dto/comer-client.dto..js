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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerClientDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerClientDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(100, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: true, maxLength: 100 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "reasonName", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: true, maxLength: 20 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "rfc", void 0);
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
], ComerClientDto.prototype, "sellerId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(80, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 80 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "street", void 0);
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
], ComerClientDto.prototype, "city", void 0);
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
], ComerClientDto.prototype, "colony", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(40, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 40 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "delegacion", void 0);
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
], ComerClientDto.prototype, "zipCode", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(22, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 22 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "country", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 20 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "fax", void 0);
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
], ComerClientDto.prototype, "phone", void 0);
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
], ComerClientDto.prototype, "mailWeb", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(31, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 20 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "state", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 20 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "curp", void 0);
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
], ComerClientDto.prototype, "blackList", void 0);
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
], ComerClientDto.prototype, "paternalSurname", void 0);
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
], ComerClientDto.prototype, "maternalSurname", void 0);
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
], ComerClientDto.prototype, "muniId", void 0);
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
], ComerClientDto.prototype, "estaId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "blackListDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "releaseDate", void 0);
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
], ComerClientDto.prototype, "penaltyId", void 0);
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
], ComerClientDto.prototype, "personType", void 0);
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
], ComerClientDto.prototype, "approvedRfc", void 0);
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
], ComerClientDto.prototype, "userFree", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "freeDate", void 0);
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
], ComerClientDto.prototype, "registerId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 20 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "economicAgreementKey", void 0);
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
], ComerClientDto.prototype, "identificationType", void 0);
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
], ComerClientDto.prototype, "identificationNumber", void 0);
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
], ComerClientDto.prototype, "agentId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(40, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 40 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "outsideNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(40, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 40 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "insisdeNumber", void 0);
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
], ComerClientDto.prototype, "password", void 0);
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
], ComerClientDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(10, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 10 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "interbankKey", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(3, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 3 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "bank", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(10, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 10 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "branch", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(11, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 11 }),
    __metadata("design:type", String)
], ComerClientDto.prototype, "checksAccount", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "penaltyInitDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerClientDto.prototype, "penaltyEndDate", void 0);
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
], ComerClientDto.prototype, "penalizeUser", void 0);
exports.ComerClientDto = ComerClientDto;
//# sourceMappingURL=comer-client.dto..js.map