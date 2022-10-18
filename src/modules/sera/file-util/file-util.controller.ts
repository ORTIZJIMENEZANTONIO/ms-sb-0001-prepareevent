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

  @MessagePattern({ cmd: "createThirdFile" })
  async createThirdFile(params: { eventId: number, fileName: string }) {
    const file = await this.service.createThirdFile(params.fileName, params.eventId);
    return file ?? { statusCode: 404, message: "Data not found" };
  }

  @MessagePattern({ cmd: "calculateGoodPrice" })
  async  calculateGoodPrice(params: { eventId: number; lotId: number }) {
    const file = await this.service.calculateGoodPrice(params);
    return file ?? { statusCode: 404, message: "Data not found" };
  }

  @MessagePattern({ cmd: "createThirdBaseFile" })
  async  createThirdBaseFile(params: { fileName: string, eventNumber: number, bankName: string }) {
    const file = await this.service.createThirdBaseFile(params.fileName, params.eventNumber, params.bankName);
    return file ?? { statusCode: 404, message: "Data not found" };
  }
}
