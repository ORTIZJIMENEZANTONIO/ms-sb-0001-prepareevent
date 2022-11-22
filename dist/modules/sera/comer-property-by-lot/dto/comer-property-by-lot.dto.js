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
exports.ComerGoodsXLotDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerGoodsXLotDto {
}
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
], ComerGoodsXLotDto.prototype, "propertyByLotId", void 0);
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
], ComerGoodsXLotDto.prototype, "goodNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "lotId", void 0);
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
], ComerGoodsXLotDto.prototype, "baseValue", void 0);
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
], ComerGoodsXLotDto.prototype, "appraisalPriceRef", void 0);
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
], ComerGoodsXLotDto.prototype, "finalPrice", void 0);
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
], ComerGoodsXLotDto.prototype, "baseVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerGoodsXLotDto.prototype, "finalVat", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.Max)(99, {
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerGoodsXLotDto.prototype, "vatPercent", void 0);
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
], ComerGoodsXLotDto.prototype, "camp1", void 0);
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
], ComerGoodsXLotDto.prototype, "camp2", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(75, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 75 }),
    __metadata("design:type", String)
], ComerGoodsXLotDto.prototype, "camp3", void 0);
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
], ComerGoodsXLotDto.prototype, "camp4", void 0);
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
], ComerGoodsXLotDto.prototype, "camp5", void 0);
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
], ComerGoodsXLotDto.prototype, "camp6", void 0);
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
], ComerGoodsXLotDto.prototype, "camp7", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(500, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 500 }),
    __metadata("design:type", String)
], ComerGoodsXLotDto.prototype, "camp8", void 0);
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
], ComerGoodsXLotDto.prototype, "camp9", void 0);
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
], ComerGoodsXLotDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.Max)(999999, {
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 5 }),
    __metadata("design:type", Number)
], ComerGoodsXLotDto.prototype, "storeNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "surveyJurKey", void 0);
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
], ComerGoodsXLotDto.prototype, "appraiserCompany", void 0);
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
], ComerGoodsXLotDto.prototype, "inventoryNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "priceWithoutVat", void 0);
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
], ComerGoodsXLotDto.prototype, "amountAppVat", void 0);
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
], ComerGoodsXLotDto.prototype, "amountNoAppVat", void 0);
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
], ComerGoodsXLotDto.prototype, "previousStatus", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerGoodsXLotDto.prototype, "appraiserDate", void 0);
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
], ComerGoodsXLotDto.prototype, "calcStatus", void 0);
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
], ComerGoodsXLotDto.prototype, "warrantyPrice", void 0);
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
], ComerGoodsXLotDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({
        message: message_1.Message.POSITIVE("$property"),
    }),
    (0, class_validator_1.Max)(99999, {
        message: message_1.Message.MAX_NUMBER("$property", "$constrain1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerGoodsXLotDto.prototype, "transferenceNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "advance", void 0);
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
], ComerGoodsXLotDto.prototype, "lotPcts", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerGoodsXLotDto.prototype, "creationDate", void 0);
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
], ComerGoodsXLotDto.prototype, "comerLotId", void 0);
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
], ComerGoodsXLotDto.prototype, "comerEventId", void 0);
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
], ComerGoodsXLotDto.prototype, "consignmentEventId", void 0);
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
], ComerGoodsXLotDto.prototype, "consignmentLotId", void 0);
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
], ComerGoodsXLotDto.prototype, "consignmentGoodsId", void 0);
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
], ComerGoodsXLotDto.prototype, "sold", void 0);
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
], ComerGoodsXLotDto.prototype, "observation", void 0);
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
], ComerGoodsXLotDto.prototype, "billNumber", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: message_1.Message.IsDate("$property"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Date)
], ComerGoodsXLotDto.prototype, "billDate", void 0);
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
], ComerGoodsXLotDto.prototype, "selected", void 0);
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
], ComerGoodsXLotDto.prototype, "annex", void 0);
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
], ComerGoodsXLotDto.prototype, "cylindersNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "origin", void 0);
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
], ComerGoodsXLotDto.prototype, "originCountry", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({
        message: message_1.Message.STRING("$property"),
    }),
    (0, class_validator_1.MaxLength)(255, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    (0, swagger_1.ApiProperty)({ example: null, required: false, maxLength: 255 }),
    __metadata("design:type", String)
], ComerGoodsXLotDto.prototype, "lotDescription", void 0);
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
    (0, swagger_1.ApiProperty)({ example: null, required: false }),
    __metadata("design:type", Number)
], ComerGoodsXLotDto.prototype, "delegationNumber", void 0);
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
], ComerGoodsXLotDto.prototype, "observations2", void 0);
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
], ComerGoodsXLotDto.prototype, "appraisalId", void 0);
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
], ComerGoodsXLotDto.prototype, "vatA", void 0);
exports.ComerGoodsXLotDto = ComerGoodsXLotDto;
//# sourceMappingURL=comer-property-by-lot.dto.js.map