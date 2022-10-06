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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const terminus_1 = require("@nestjs/terminus");
let HealthController = class HealthController {
    constructor(health, dbIndicator, memoryIndicator, diskHealthIndicator) {
        this.health = health;
        this.dbIndicator = dbIndicator;
        this.memoryIndicator = memoryIndicator;
        this.diskHealthIndicator = diskHealthIndicator;
    }
    check() {
        return this.health.check([
            () => this.dbIndicator.pingCheck('database'),
            () => this.memoryIndicator.checkHeap('heap', 50 * 1024 * 1024),
            () => this.memoryIndicator.checkRSS('memory', 150 * 1024 * 1024),
            () => this.diskHealthIndicator.checkStorage('disk <5> health', {
                thresholdPercent: 0.75,
                path: '/',
            }),
        ]);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Revisa el status del servicio' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Obtiene el status del servicio',
    }),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.TypeOrmHealthIndicator,
        terminus_1.MemoryHealthIndicator,
        terminus_1.DiskHealthIndicator])
], HealthController);
exports.HealthController = HealthController;
//# sourceMappingURL=health.controller.js.map