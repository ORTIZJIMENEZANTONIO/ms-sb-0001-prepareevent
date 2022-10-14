import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerEventsService } from "./comer-events.service";
import { ComerEventDto } from "./dto/comer-events.dto";
import { ComerLotsDto } from "../comer-batch/dto/comer-batch.dto";
import { UpdateComerEventDto } from "./dto/update-comer-events.entity";

@Controller("comer-events")
export class ComerEventsController {
  constructor(
    private readonly service: ComerEventsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerEvent" })
  async createComerEvent(comerEvent: ComerEventDto) {
    return await this.service.createComerEvent(comerEvent);
  }

  @MessagePattern({ cmd: "getAllComerEvents" })
  async getAllComerEvents(pagination: PaginationDto) {
    return await this.service.getAllComerEvents(pagination);
  }

  @MessagePattern({ cmd: "getComerEventByAddress" })
  async getComerEventByAddress(comerEvent: ComerEventDto & PaginationDto) {
    return await this.service.getComerEventByAddress(comerEvent);
  }

  @MessagePattern({ cmd: "getComerEventByAddressAndId" })
  async getComerEventByAddressAndId(comerEvent: UpdateComerEventDto) {
    return await this.service.getComerEventByAddressAndId(comerEvent);
  }

  @MessagePattern({ cmd: "getComerEventByTpEvent" })
  async getComerEventByTpEvent(
    comerEvent: ComerEventDto & ComerLotsDto & PaginationDto
  ) {
    return await this.service.getComerEventByTpEvent(comerEvent);
  }

  @MessagePattern({ cmd: "deleteComerEvent" })
  async deleteComerEvent(comer: ComerEventDto) {
    const { affected } = await this.service.deleteComerEvent(comer);
    return affected == 0
      ? {
          statusCode: 404,
          message: "ComerEvent not found",
          error: "Not found",
        }
      : { statusCode: 200, message: "Successfully deleted" };
  }
}
