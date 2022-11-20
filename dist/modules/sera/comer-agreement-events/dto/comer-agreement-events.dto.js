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
exports.ComerConvEventDto = void 0;
const class_validator_1 = require("class-validator");
const message_1 = require("../../../../shared/validation-messages/message");
class ComerConvEventDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)({ message: message_1.Message.POSITIVE("$property") }),
    __metadata("design:type", Number)
], ComerConvEventDto.prototype, "eventId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: message_1.Message.REQUIRED("$property"),
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: message_1.Message.NUMBER("$property"),
    }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ComerConvEventDto.prototype, "announcementEventId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$pŕopérty") }),
    (0, class_validator_1.MaxLength)(200, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    __metadata("design:type", String)
], ComerConvEventDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: message_1.Message.REQUIRED("$property") }),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$pŕopérty") }),
    (0, class_validator_1.MaxLength)(70, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    __metadata("design:type", String)
], ComerConvEventDto.prototype, "dates", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$pŕopérty") }),
    (0, class_validator_1.MaxLength)(70, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    __metadata("design:type", String)
], ComerConvEventDto.prototype, "schedule", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$pŕopérty") }),
    (0, class_validator_1.MaxLength)(200, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    __metadata("design:type", String)
], ComerConvEventDto.prototype, "place", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: message_1.Message.STRING("$pŕopérty") }),
    (0, class_validator_1.MaxLength)(500, {
        message: message_1.Message.MAX_LENGTH("$property", "$constraint1"),
    }),
    __metadata("design:type", String)
], ComerConvEventDto.prototype, "restriction", void 0);
exports.ComerConvEventDto = ComerConvEventDto;
//# sourceMappingURL=comer-agreement-events.dto.js.map