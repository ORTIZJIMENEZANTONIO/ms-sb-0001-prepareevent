import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { GoodNotDeliveredService } from "./good-not-delivered.service";

@Controller('good-not-delivered')
export class GoodNotDeliveredController {
  constructor(
    private readonly service: GoodNotDeliveredService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  
}
