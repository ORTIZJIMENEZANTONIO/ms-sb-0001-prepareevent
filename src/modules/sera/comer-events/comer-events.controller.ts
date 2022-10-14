import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";

@Controller("comer-events")
export class ComerEventsController {
  constructor(
    private readonly service: ComerEventsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerEvent" })
  createComerEvent(comerEvent: ComerEventDto) {
    const zipCodeCreated = this.service.createComerEvent(comerEvent);
    return (
      zipCodeCreated ?? {
        statusCode: 503,
        message: "This comer event was not created",
        error: "Create Error",
      }
    );
  }

  @MessagePattern({ cmd: 'getAllComerEvents' })
  async getAllComerEvents( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComerEvents( {inicio, pageSize} );
  }

  @MessagePattern({ cmd: "getComerEventByAddress" })
  async getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto) {
    return await this.service.getComerEventByAddress(comerEvent);
  }

  @MessagePattern({ cmd: "getComerEventByAddressAndId" })
  async getComerEventByAddressAndId(comerEvent: ComerEventDto) {
    return await this.service.getComerEventByAddressAndId(comerEvent);
  }

  @MessagePattern({ cmd: "getComerEventByTpEvent" })
  async getComerEventByTpEvent(comerEvent: ComerEventDto & ComerLotsDto & PaginationDto) {
    return await this.service.getComerEventByTpEvent(comerEvent) ;
  }
}
