"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtilModule = void 0;
const common_1 = require("@nestjs/common");
const file_util_controller_1 = require("./file-util.controller");
const file_util_service_1 = require("./file-util.service");
let FileUtilModule = class FileUtilModule {
};
FileUtilModule = __decorate([
    (0, common_1.Module)({
        controllers: [file_util_controller_1.FileUtilController],
        providers: [file_util_service_1.FileUtilService]
    })
], FileUtilModule);
exports.FileUtilModule = FileUtilModule;
//# sourceMappingURL=file-util.module.js.map