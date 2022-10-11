import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ZipCodeEntity } from "./entities/zipCodeEntity.entity";
import { ZipCodeService } from "./zip-code.service";
import { ZipCodeController } from "./zip-code.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ZipCodeEntity])],
  providers: [
    ZipCodeService,
    makeCounterProvider({
      name: "zip_code_served",
      help: "zip_code_help",
    }),
  ],
  controllers: [ZipCodeController],
})
export class ZipCodeModule {}
