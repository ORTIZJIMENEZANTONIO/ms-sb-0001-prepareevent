import * as xlsx from "xlsx";
import * as fs from "fs";

export class File {
  static async makeFile(data, path) {

    const queryBuilder = [{campo1: ["campo1","campo1A"] }]
    const workSheet = xlsx.utils.json_to_sheet(queryBuilder);
    const workBook = xlsx.utils.book_new();
    const name = `${path}${new Date().getTime()}.xlsx`
    xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel")
    await xlsx.write(workBook, { bookType: 'xlsx', type: 'buffer' })
    await xlsx.write(workBook, { bookType: 'xlsx', type: 'binary' })
    await xlsx.writeFile(workBook, name);
    const f = fs.readFileSync(name, { encoding: 'base64' })
    //fs.unlink(name, err => err)
    return { data: queryBuilder, file: { name: "PUP_LANZA_REPORTE.xlsx", base64: queryBuilder.length > 0 ? f : '' } }


  }
}
