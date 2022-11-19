import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as path from 'path';
import * as winston from 'winston';

import { configService } from './shared/config/config.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComerEventsModule } from './modules/sera/comer-events/comer-events.module';
import { ComerAgreementEventsModule } from './modules/sera/comer-agreement-events/comer-agreement-events.module';
import { ComerPropertyByBatchModule } from './modules/sera/comer-property-by-batch/comer-property-by-batch.module';
import { ComerLotModule } from './modules/sera/comer-lot/comer-batch.module';
import { ComerAdjudirecModule } from './modules/sera/comer-adjudirec/comer-adjudirec.module';
import { ComerClientModule } from './modules/sera/comer-client/comer-client.module';
import { ComerRejectedPropertyModule } from './modules/sera/comer-rejected-property/comer-rejected-property.module';
import { MandateFunctionModule } from './modules/sera/mandate-function/mandate-function.module';
import { FileUtilModule } from './modules/sera/file-util/file-util.module';
import { TreatmentOfPartialReturnsModule } from './modules/sera/treatment-of-partial-returns/treatment-of-partial-returns.module';
import { GoodNotDeliveredModule } from './modules/sera/good-not-delivered/good-not-delivered.module';
import { PartialPropertyDeliveredModule } from './modules/sera/partial-property-delivered/partial-property-delivered.module';
import { PaProcessModule } from './modules/sera/pa-process/pa-process.module';
import { CurrentEventModule } from './modules/sera/current-event/current-event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot( 
      configService.getTypeOrmConfig(),),
    WinstonModule.forRoot({
      level: 'debug', 
      format: winston.format.combine( 
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
      ),
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
    ComerEventsModule,
    ComerAgreementEventsModule,
    ComerPropertyByBatchModule,
    ComerLotModule,
    ComerAdjudirecModule,
    ComerClientModule,
    ComerRejectedPropertyModule,
    MandateFunctionModule,
    FileUtilModule,
    TreatmentOfPartialReturnsModule,
    GoodNotDeliveredModule,
    PartialPropertyDeliveredModule,
    PaProcessModule,
    CurrentEventModule,
    //
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
