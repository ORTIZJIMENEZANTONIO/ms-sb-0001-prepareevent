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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtilService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const prom_client_1 = require("prom-client");
const xlsx = require("xlsx");
const fs = require("fs");
let FileUtilService = class FileUtilService {
    constructor(logger, counter) {
        this.logger = logger;
        this.counter = counter;
        this.path = "src/files/";
    }
    async makeFile(data) {
        const queryBuilder = [{ campo1: ["campo1", "campo1A"] }];
        const workSheet = xlsx.utils.json_to_sheet(queryBuilder);
        const workBook = xlsx.utils.book_new();
        const name = `${this.path}${new Date().getTime()}.xlsx`;
        xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel");
        await xlsx.write(workBook, { bookType: 'xlsx', type: 'buffer' });
        await xlsx.write(workBook, { bookType: 'xlsx', type: 'binary' });
        await xlsx.writeFile(workBook, name);
        const f = fs.readFileSync(name, { encoding: 'base64' });
        return { data: queryBuilder, file: { name: "PUP_LANZA_REPORTE.xlsx", base64: queryBuilder.length > 0 ? f : '' } };
    }
};
FileUtilService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __param(1, (0, nestjs_prometheus_1.InjectMetric)("file_util_served")),
    __metadata("design:paramtypes", [common_1.Logger,
        prom_client_1.Counter])
], FileUtilService);
exports.FileUtilService = FileUtilService;
//# sourceMappingURL=file-util.service.js.map