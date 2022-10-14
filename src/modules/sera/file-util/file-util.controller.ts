import { Controller, Inject } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { MessagePattern } from "@nestjs/microservices";

import { FileUtilService } from "./file-util.service";

@Controller("file-util")
export class FileUtilController {
  constructor(
    private readonly service: FileUtilService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @MessagePattern({ cmd: "createXlsx" })
  createXlsx( ) {
    const file = this.service.makeFile("hi");
    return file ?? { statusCode: 400, message: "File failed" };
  }
}
