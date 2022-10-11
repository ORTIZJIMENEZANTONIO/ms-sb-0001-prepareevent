import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";

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
  async getComerEventByAddress(address: string) {
    console.log( address )
    const codeFound = await this.service.getComerEventByAddress(address);
    return (
      codeFound ?? {
        statusCode: "404",
        message: "Comer event not found",
        error: "Not found",
      }
    );
  }
}
