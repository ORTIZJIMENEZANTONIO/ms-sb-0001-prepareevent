import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerClientDto } from "./dto/comer-client.dto.";
import { ComerClientService } from "./comer-client.service";

@Controller('comer-client')
export class ComerClientController {
  constructor(
    private readonly service: ComerClientService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerClient" })
  createComerClient(comerClient: ComerClientDto) {
    const comer = this.service.createComerClient(comerClient);
    return (
      comer ?? {
        statusCode: 503,
        message: "This comer event was not created",
        error: "Create Error",
      }
    );
  }

  @MessagePattern({ cmd: 'getAllComersClient' })
  async getAllComersClient( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComersClient( {inicio, pageSize} );
  }
}
