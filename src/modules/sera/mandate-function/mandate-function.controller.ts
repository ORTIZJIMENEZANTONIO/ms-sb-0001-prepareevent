import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { MandateFunctionService } from "./mandate-function.service";
import { MandateFunctionDto } from "./dto/mandate-function.dto";

@Controller("mandate-function")
export class MandateFunctionController {
  constructor(
    private readonly service: MandateFunctionService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "updateMandate" })
  updateMandate(params: MandateFunctionDto) {
    return this.service.updateMandate(params)
  }
}
