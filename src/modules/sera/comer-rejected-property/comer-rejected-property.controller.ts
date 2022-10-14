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
  async getAllComersRejectedProperties({ inicio, pageSize }: PaginationDto) {
    return await this.service.getAllComersRejectedProperties({
      inicio,
      pageSize,
    });
  }

  @MessagePattern({ cmd: "getComerRejectedPropertyByEventId" })
  async getComerRejectedPropertyByEventId(
    comer: PaginationDto & ComerRejectedGoodDto
  ) {
    return await this.service.getComerRejectedPropertyByEventId(comer);
  }
}
