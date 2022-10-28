import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaProcessService } from "./pa-process.service";
import { PaRejectDto } from "./dto/reject.dto";

@Controller('pa-process')
export class PaProcessController {
  constructor(
    private readonly service: PaProcessService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern('paReject')
  async paReject(comer: PaRejectDto) {
    return await this.service.paReject(comer);
  }
}
