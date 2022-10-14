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
    return this.service.createComerLot(comerEvent);
  }

  @MessagePattern({ cmd: 'getAllComersLot' })
  async getAllComersLot( pagination: PaginationDto ) {
    return await this.service.getAllComersLot( pagination );
  }

  @MessagePattern({ cmd: 'getComerLotByEventId' })
  async getComerLotByEventId( comer: ComerLotsDto & PaginationDto ) {
    return await this.service.getComerLotByEventId( comer );
  }

  @MessagePattern({ cmd: "deleteComerLot" })
  async deleteComerLot(comer: ComerLotsDto) {
    const { affected } = await this.service.deleteComerLot(comer);
    return affected == 0
      ? {
          statusCode: 404,
          message: "ComerConvEvent not found",
          error: "Not found",
        }
      : { statusCode: 200, message: "Successfully deleted" };
  }
}
