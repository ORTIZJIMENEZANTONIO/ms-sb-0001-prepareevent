import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerPropertyByBatchService } from "./comer-property-by-batch.service";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-lot.dto";

@Controller('comer-property-by-batch')
export class ComerPropertyByBatchController {
  constructor(
    private readonly service: ComerPropertyByBatchService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createComerGoodXLot" })
  createComerGoodXLot(comerEvent: ComerGoodsXLotDto) {
    return this.service.createComerGoodXLot(comerEvent);
  }

  @MessagePattern({ cmd: 'getAllComerGoodXLots' })
  async getAllComerGoodXLots( {inicio, pageSize}: PaginationDto ) {
    return await this.service.getAllComerGoodXLots( {inicio, pageSize} );
  }

  @MessagePattern({ cmd: "getComerXLotByLotId" })
  async getComerXLotByLotId(comerEvent: ComerGoodsXLotDto & PaginationDto) {
    return await this.service.getComerXLotByLotId(comerEvent);
  }

  @MessagePattern({ cmd: "deleteComerXLot" })
  async deleteComerXLot(comer: ComerGoodsXLotDto) {
    const { affected } = await this.service.deleteComerXLot(comer);
    return affected == 0
      ? {
          statusCode: 404,
          message: "Comer X Lot not found",
          error: "Not found",
        }
      : { statusCode: 200, message: "Successfully deleted" };
  }

}
