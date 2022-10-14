import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";
import * as xlsx from 'xlsx';
import * as fs from 'fs'
@Injectable()
export class FileUtilService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("file_util_served") public counter: Counter<string>
  ) {}

  private path = "src/files/";

  async makeFile(data) {

    const queryBuilder = [{campo1: ["campo1","campo1A"] }]
    const workSheet = xlsx.utils.json_to_sheet(queryBuilder);
    const workBook = xlsx.utils.book_new();
    const name = `${this.path}${new Date().getTime()}.xlsx`
    xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel")
    await xlsx.write(workBook, { bookType: 'xlsx', type: 'buffer' })
    await xlsx.write(workBook, { bookType: 'xlsx', type: 'binary' })
    await xlsx.writeFile(workBook, name);
    const f = fs.readFileSync(name, { encoding: 'base64' })
    //fs.unlink(name, err => err)
    return { data: queryBuilder, file: { name: "PUP_LANZA_REPORTE.xlsx", base64: queryBuilder.length > 0 ? f : '' } }


  }
}