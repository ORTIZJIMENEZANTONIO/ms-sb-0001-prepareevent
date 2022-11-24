import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { ComerSentenceDispersionService } from "./comer-sentence-dispersion.service";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";

@Controller('comer-sentence-dispersion')
export class ComerSentenceDispersionController {
  constructor(
    private readonly service: ComerSentenceDispersionService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}
  
  @MessagePattern({ cmd: "setSentenceDispersion" })
  async setSentenceDispersion(params: SentenceDispersionDto) {
    const events = await this.service.setSentenceDispersion(params);
    return events;
  }
}
