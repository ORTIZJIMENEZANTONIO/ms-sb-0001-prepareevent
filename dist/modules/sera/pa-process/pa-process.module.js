"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaProcessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const comer_lot_entity_1 = require("../comer-lot/entities/comer-lot.entity");
const comer_event_entity_1 = require("../comer-event/entities/comer-event.entity");
const comer_rejected_property_entity_1 = require("../comer-rejected-property/entities/comer-rejected-property.entity");
const good_atrib_mal_entity_1 = require("./entities/good-atrib-mal.entity");
const goods_entity_1 = require("./entities/goods.entity");
const pa_process_controller_1 = require("./pa-process.controller");
const pa_process_service_1 = require("./pa-process.service");
let PaProcessModule = class PaProcessModule {
};
PaProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                goods_entity_1.GoodsEntity,
                comer_event_entity_1.ComerEventEntity,
                comer_lot_entity_1.ComerLotEntity,
                comer_rejected_property_entity_1.ComerRejectedPropertyEntity,
                good_atrib_mal_entity_1.GoodAtribMalEntity
            ]),
        ],
        controllers: [pa_process_controller_1.PaProcessController],
        providers: [
            pa_process_service_1.PaProcessService,
            (0, nestjs_prometheus_1.makeCounterProvider)({
                name: "pa_process_served",
                help: "pa_process_help",
            }),
        ],
    })
], PaProcessModule);
exports.PaProcessModule = PaProcessModule;
//# sourceMappingURL=pa-process.module.js.map