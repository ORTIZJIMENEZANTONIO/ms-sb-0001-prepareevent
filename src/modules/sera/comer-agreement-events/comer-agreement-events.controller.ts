import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerConvEventDto } from "./dto/comer-agreement-events.dto";
import { ComerAgreementEventsService } from "./comer-agreement-events.service";

@Controller("comer-agreement-events")
export class ComerAgreementEventsController {
  constructor(
    private readonly service: ComerAgreementEventsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerConvEvent" })
  createComerConvEvent(comerEvent: ComerConvEventDto) {
    const comerCreated = this.service.createComerConvEvent(comerEvent);
    return (
      comerCreated ?? {
        statusCode: 503,
        message: "This comer conv event was not created",
        error: "Create Error",
      }
    );
  }

  @MessagePattern({ cmd: 'getAllComerConvEvents' })
  async getAllComerConvEvents( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComerConvEvents( {inicio, pageSize} );
  }

  @MessagePattern({ cmd: "getComerConvEventById" })
  async getComerConvEventById(comerConvEvent: ComerConvEventDto) {
    return await this.service.getComerConvEventById(comerConvEvent);
  }
}
