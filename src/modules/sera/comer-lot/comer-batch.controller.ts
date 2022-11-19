import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotDto } from './dto/comer-lot.dto';
import { ComerLotService } from "./comer-batch.service";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";

@Controller('comer-batch')
export class ComerLotController {
  constructor(
    private readonly service: ComerLotService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerLot" })
  createComerLot(comer: ComerLotDto) {
    return this.service.createComerLot(comer);
  }

  @MessagePattern({ cmd: "createComerLotCanceled" })
  createComerLotCanceled(comer: ComerLotCanceledDto) {
    return this.service.createComerLotCanceled(comer);
  }

  @MessagePattern({ cmd: 'getAllComersLot' })
  async getAllComersLot( pagination: PaginationDto ) {
    return await this.service.getAllComersLot( pagination );
  }

  @MessagePattern({ cmd: 'getComerLotByEventId' })
  async getComerLotByEventId( comer: ComerLotDto & PaginationDto ) {
    return await this.service.getComerLotByEventId( comer );
  }

  @MessagePattern({ cmd: "deleteComerLot" })
  async deleteComerLot(comer: ComerLotDto) {
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
