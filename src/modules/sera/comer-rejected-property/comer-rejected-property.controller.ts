import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerRejectedGoodDto } from "./dto/comer-rejected-property.dto";
import { ComerRejectedPropertyService } from "./comer-rejected-property.service";

@Controller("comer-rejected-property")
export class ComerRejectedPropertyController {
  constructor(
    private readonly service: ComerRejectedPropertyService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerRejectedProperty" })
  createComerRejectedProperty(comerEvent: ComerRejectedGoodDto) {
    return this.service.createComerRejectedProperty(comerEvent);
  }

  @MessagePattern({ cmd: "getAllComersRejectedProperties" })
  async getAllComersRejectedProperties(pagination: PaginationDto) {
    return await this.service.getAllComersRejectedProperties(pagination);
  }

  @MessagePattern({ cmd: "getComerRejectedPropertyByEventId" })
  async getComerRejectedPropertyByEventId(
    comer: PaginationDto & ComerRejectedGoodDto
  ) {
    return await this.service.getComerRejectedPropertyByEventId(comer);
  }

  @MessagePattern({ cmd: "deleteComerRejectedProperty" })
  async deleteComerRejectedProperty(comer: ComerRejectedGoodDto) {
    const { affected } = await this.service.deleteComerRejectedProperty(comer);
    return affected == 0
      ? {
          statusCode: 404,
          message: "Comer rejected not found",
          error: "Not found",
        }
      : { statusCode: 200, message: "Successfully deleted" };
  }
}
