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
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerLotDto {
}
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "id", void 0);
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
    (0, swagger_1.ApiProperty)({ example: null, required: true, maxLength: 4 }),
    __metadata("design:type", String)
], ComerLotDto.prototype, "statusVtaId", void 0);
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
    (0, class_validator_1.Max)(9999999, {
        message: message_1.Message.MAX_NUMBER("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "eventId", void 0);
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
    (0, class_validator_1.Max)(99999999, {
        message: message_1.Message.MAX_NUMBER("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 8 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "publicLot", void 0);
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
], ComerLotDto.prototype, "description", void 0);
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
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 33 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "baseValue", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "transferenceNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "customerId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "appraisalPriceRef", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "warrantyPrice", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerLotDto.prototype, "deliveryDate", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "finalPrice", void 0);
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
], ComerLotDto.prototype, "referenceG", void 0);
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
], ComerLotDto.prototype, "referential", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "accumulated", void 0);
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
], ComerLotDto.prototype, "systemValid", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "lotVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountAppVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountNoAppVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "vatAppPercentage", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 9 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "vatNoAppPercentage", void 0);
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
], ComerLotDto.prototype, "regCoordination", void 0);
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
], ComerLotDto.prototype, "regCoordinator", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(200, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 200 }),
    __metadata("design:type", String)
], ComerLotDto.prototype, "fiscMandFact", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(250, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 250 }),
    __metadata("design:type", String)
], ComerLotDto.prototype, "ubication", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "advance", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "amountWithoutVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "notifyOfficeNumber", void 0);
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
], ComerLotDto.prototype, "notifyPrint", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(4, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 4 }),
    __metadata("design:type", String)
], ComerLotDto.prototype, "statusVtantId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "goodsNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "faultExceeds", void 0);
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
], ComerLotDto.prototype, "assignedEs", void 0);
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
], ComerLotDto.prototype, "scrapEs", void 0);
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
], ComerLotDto.prototype, "request", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "withheldAmount", void 0);
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
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 2 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "delegationNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "originLot", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "lotCover", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "palette", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "assignedWarranty", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 7 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "liqAmount", void 0);
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
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 2 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "phase", void 0);
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
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 2 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "partialitiesNumber", void 0);
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
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 4 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "percentPoints", void 0);
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
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: 1, required: true, maxLength: 3 }),
    __metadata("design:type", Number)
], ComerLotDto.prototype, "advancePercent", void 0);
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
], ComerLotDto.prototype, "vatA", void 0);
exports.ComerLotDto = ComerLotDto;
//# sourceMappingURL=comer-lot.dto.js.map