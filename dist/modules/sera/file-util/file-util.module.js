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
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
const comer_property_by_lot_entity_1 = require("../comer-property-by-lot/entities/comer-property-by-lot.entity");
const file_util_controller_1 = require("./file-util.controller");
const file_util_service_1 = require("./file-util.service");
let FileUtilModule = class FileUtilModule {
};
FileUtilModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                comer_property_by_lot_entity_1.ComerGoodsXLotEntity,
                comer_lot_entity_1.ComerLotEntity,
                comer_event_entity_1.ComerEventEntity,
            ]),
        ],
        controllers: [file_util_controller_1.FileUtilController],
        providers: [
            file_util_service_1.FileUtilService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "file_util_served",
                help: "file_util_help",
            }),
        ],
    })
], FileUtilModule);
exports.FileUtilModule = FileUtilModule;
//# sourceMappingURL=file-util.module.js.map