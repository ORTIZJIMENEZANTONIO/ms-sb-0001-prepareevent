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
  createXlsx() {
    const file = this.service.makeFile("hi", "name");
    return file ?? { statusCode: 400, message: "File failed" };
  }

  @MessagePattern({ cmd: "createThirdFile" })
  createThirdFile(params: { eventId: number; fileName: string }) {
    const file = this.service.createThirdFile(params.fileName, params.eventId);
    return file ?? { statusCode: 400, message: "File failed" };
  }

  @MessagePattern({ cmd: "calculateGoodPrice" })
  calculateGoodPrice(params: { eventId: number; lotId: number }) {
    const file = this.service.calculateGoodPrice(params);
    return file ?? { statusCode: 400, message: "File failed" };
  }
}
