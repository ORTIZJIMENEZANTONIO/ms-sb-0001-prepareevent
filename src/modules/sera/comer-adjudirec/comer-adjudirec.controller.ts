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

  @MessagePattern({ cmd: 'getAllComersAdjudirec' })
  async getAllComersAdjudirec( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComersAdjudirec( {inicio, pageSize} );
  }
}
