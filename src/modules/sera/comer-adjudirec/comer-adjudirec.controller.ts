import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerAdjudirecDto } from "./dto/comer-adjudirec.dto";
import { ComerAdjudirecService } from "./comer-adjudirec.service";

@Controller("comer-adjudirec")
export class ComerAdjudirecController {
  constructor(
    private readonly service: ComerAdjudirecService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerAdjudirec" })
  async createComerAdjudirec(comerEvent: ComerAdjudirecDto) {
    return await this.service.createComerAdjudirec(comerEvent);
  }

  @MessagePattern({ cmd: "getAllComersAdjudirec" })
  async getAllComersAdjudirec(pagination: PaginationDto) {
    return await this.service.getAllComersAdjudirec(pagination);
  }

  @MessagePattern({ cmd: "deleteComerAdjudirec" })
  async deleteComerAdjudirec(comer: ComerAdjudirecDto) {
    const { affected } = await this.service.deleteComerAdjudirec(comer);
    return affected == 0
      ? {
          statusCode: 404,
          message: "ComerAdjudirec not found",
          error: "Not found",
        }
      : { statusCode: 200, message: "Successfully deleted" };
  }
}
