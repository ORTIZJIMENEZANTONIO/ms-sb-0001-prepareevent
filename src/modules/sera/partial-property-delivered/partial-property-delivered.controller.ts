import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PartialPropertyDeliveredService } from "./partial-property-delivered.service";
import { PartialPropertyDelivered } from "./dto/partial-property-delivered.dto";

@Controller('partial-property-delivered')
export class PartialPropertyDeliveredController {
  constructor(
    private readonly service: PartialPropertyDeliveredService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createNewPartialGood" })
  createNewPartialGood(comer: PartialPropertyDelivered) {
    return this.service.createNewPartialGood(comer);
  }
}
