import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  makeCounterProvider,
  PrometheusModule,
} from "@willsoto/nestjs-prometheus";

import { ComerClientController } from './comer-client.controller';
import { ComerClientService } from './comer-client.service';
import { ComerClientEntity } from "./entities/comer-client.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ComerClientEntity])],
  controllers: [ComerClientController],
  providers: [
    ComerClientService,
    makeCounterProvider({
      name: "comer_client_served",
      help: "comer_client_help",
    }),
  ]
})
export class ComerClientModule {}
