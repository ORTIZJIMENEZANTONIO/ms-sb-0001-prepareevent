import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { TreatmentOfPartialReturnsService } from "./treatment-of-partial-returns.service";

@Controller("treatment-of-partial-returns")
export class TreatmentOfPartialReturnsController {
  constructor(
    private readonly service: TreatmentOfPartialReturnsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "treatmentOfPartialReturns" })
  treatmentOfPartialReturns(goodNumber: number) {
    return this.service.treatmentOfPartialReturns(goodNumber);
  }
}
