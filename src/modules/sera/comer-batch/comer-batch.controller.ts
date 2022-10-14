import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from './dto/comer-batch.dto';
import { ComerBatchService } from "./comer-batch.service";

@Controller('comer-batch')
export class ComerBatchController {
  constructor(
    private readonly service: ComerBatchService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerLot" })
  createComerLot(comerEvent: ComerLotsDto) {
    const zipCodeCreated = this.service.createComerLot(comerEvent);
    return (
      zipCodeCreated ?? {
        statusCode: 503,
        message: "This comer lot was not created",
        error: "Create Error",
      }
    );
  }

  @MessagePattern({ cmd: 'getAllComersLot' })
  async getAllComersLot( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComersLot( {inicio, pageSize} );
  }
}
