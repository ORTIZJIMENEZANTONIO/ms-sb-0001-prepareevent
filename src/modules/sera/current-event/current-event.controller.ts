import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { CurrentEventService } from "./current-event.service";
import { CurrentFilterDto } from "./dto/current-ifilter.dto";

@Controller("current-event")
export class CurrentEventController {
  constructor(
    private readonly service: CurrentEventService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "getCurrentEvents" })
  async getCurrentEvents(params: CurrentFilterDto) {
    const events = await this.service.getCurrentEvents(params);
    return events;
  }

  @MessagePattern({ cmd: "spEventsInProgress" })
  async spEventsInProgress() {
    const events = await this.service.spEventsInProgress();
    return events;
  }
}
