"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nest_winston_1 = require("nest-winston");
const path = require("path");
const winston = require("winston");
const config_service_1 = require("./shared/config/config.service");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const comer_events_module_1 = require("./modules/sera/comer-events/comer-events.module");
const comer_agreement_events_module_1 = require("./modules/sera/comer-agreement-events/comer-agreement-events.module");
const comer_property_by_batch_module_1 = require("./modules/sera/comer-property-by-batch/comer-property-by-batch.module");
const comer_batch_module_1 = require("./modules/sera/comer-lot/comer-batch.module");
const comer_adjudirec_module_1 = require("./modules/sera/comer-adjudirec/comer-adjudirec.module");
const comer_client_module_1 = require("./modules/sera/comer-client/comer-client.module");
const comer_rejected_property_module_1 = require("./modules/sera/comer-rejected-property/comer-rejected-property.module");
const mandate_function_module_1 = require("./modules/sera/mandate-function/mandate-function.module");
const file_util_module_1 = require("./modules/sera/file-util/file-util.module");
const treatment_of_partial_returns_module_1 = require("./modules/sera/treatment-of-partial-returns/treatment-of-partial-returns.module");
const good_not_delivered_module_1 = require("./modules/sera/good-not-delivered/good-not-delivered.module");
const partial_property_delivered_module_1 = require("./modules/sera/partial-property-delivered/partial-property-delivered.module");
const pa_process_module_1 = require("./modules/sera/pa-process/pa-process.module");
const current_event_module_1 = require("./modules/sera/current-event/current-event.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig()),
            nest_winston_1.WinstonModule.forRoot({
                level: 'debug',
                format: winston.format.combine(winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }), winston.format.errors({ stack: true }), winston.format.splat(), winston.format.json()),
                transports: [
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/debug/'),
                        filename: 'debug.log',
                        level: 'debug',
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/error/'),
                        filename: 'error.log',
                        level: 'error',
                    }),
                    new winston.transports.File({
                        dirname: path.join(__dirname, './../log/info/'),
                        filename: 'info.log',
                        level: 'info',
                    }),
                    new winston.transports.Console({ level: 'debug' }),
                ],
            }),
            comer_events_module_1.ComerEventsModule,
            comer_agreement_events_module_1.ComerAgreementEventsModule,
            comer_property_by_batch_module_1.ComerPropertyByBatchModule,
            comer_batch_module_1.ComerBatchModule,
            comer_adjudirec_module_1.ComerAdjudirecModule,
            comer_client_module_1.ComerClientModule,
            comer_rejected_property_module_1.ComerRejectedPropertyModule,
            mandate_function_module_1.MandateFunctionModule,
            file_util_module_1.FileUtilModule,
            treatment_of_partial_returns_module_1.TreatmentOfPartialReturnsModule,
            good_not_delivered_module_1.GoodNotDeliveredModule,
            partial_property_delivered_module_1.PartialPropertyDeliveredModule,
            pa_process_module_1.PaProcessModule,
            current_event_module_1.CurrentEventModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map