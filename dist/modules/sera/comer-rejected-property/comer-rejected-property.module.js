"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComerRejectedPropertyModule = void 0;
const common_1 = require("@nestjs/common");
const comer_rejected_property_service_1 = require("./comer-rejected-property.service");
const comer_rejected_property_controller_1 = require("./comer-rejected-property.controller");
let ComerRejectedPropertyModule = class ComerRejectedPropertyModule {
};
ComerRejectedPropertyModule = __decorate([
    (0, common_1.Module)({
        providers: [comer_rejected_property_service_1.ComerRejectedPropertyService],
        controllers: [comer_rejected_property_controller_1.ComerRejectedPropertyController]
    })
], ComerRejectedPropertyModule);
exports.ComerRejectedPropertyModule = ComerRejectedPropertyModule;
//# sourceMappingURL=comer-rejected-property.module.js.map