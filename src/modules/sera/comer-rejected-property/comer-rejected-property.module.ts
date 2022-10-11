import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerRejectedPropertyService } from './comer-rejected-property.service';
import { ComerRejectedPropertyController } from './comer-rejected-property.controller';
import { ComerRejectedPropertyEntity } from "./entities/comer-rejected-property.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerRejectedPropertyEntity])],
  controllers: [ComerRejectedPropertyController],
  providers: [
    ComerRejectedPropertyService,
    makeCounterProvider({
      name: "comer_rejected_property_served",
      help: "comer_rejected_property_help",
    }),
  ],
})
export class ComerRejectedPropertyModule {}
