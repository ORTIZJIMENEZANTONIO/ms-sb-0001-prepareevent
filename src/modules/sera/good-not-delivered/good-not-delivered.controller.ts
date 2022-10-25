import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { GoodNotDeliveredService } from "./good-not-delivered.service";
import { GoodNotDeliveredDto } from "./dto/good-not-delivered.dto";

@Controller("good-not-delivered")
export class GoodNotDeliveredController {
  constructor(
    private readonly service: GoodNotDeliveredService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "updateGoodNotDeliveredToTheCanceledLot" })
  async updateGoodNotDeliveredToTheCanceledLot(comer: GoodNotDeliveredDto) {
    return await this.service.updateGoodNotDeliveredToTheCanceledLot(comer);
  }
}
