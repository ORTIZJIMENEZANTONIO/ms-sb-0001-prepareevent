import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { PaProcessService } from "./pa-process.service";
import { PaRejectDto } from "./dto/reject.dto";
import { RemittancePrepByGoodDto } from "./dto/remmitance-prep-by-good.dto";
import { ChangeStatusValidateDto } from "./dto/change-status-validate.dto";

@Controller("pa-process")
export class PaProcessController {
  constructor(
    private readonly service: PaProcessService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "paReject" })
  async paReject(comer: PaRejectDto) {
    return await this.service.paReject(comer);
  }

  @MessagePattern({ cmd: "paRemittancePrepByGood" })
  async paRemittancePrepByGood(comer: RemittancePrepByGoodDto) {
    return await this.service.paRemittancePrepByGood(comer);
  }

  @MessagePattern({ cmd: "paChangeStatusValidate" })
  async paChangeStatusValidate(comer: ChangeStatusValidateDto)  {
    return await this.service.paChangeStatusValidate(comer);
  }
}
