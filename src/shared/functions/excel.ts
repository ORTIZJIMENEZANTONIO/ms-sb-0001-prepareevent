import * as xlsx from "xlsx";
import * as fs from "fs";

export class File {

  static async makeFile(data, fileName: string) {
    console.log(data)
    const path = `${__dirname.split("dist")[0]}src/files/`;
    const workSheet = xlsx.utils.json_to_sheet(data);
    const workBook = xlsx.utils.book_new();
    const name = `${path}${fileName ?? new Date().getTime()}.xlsx`;
    xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel");
    await xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    await xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    await xlsx.writeFile(workBook, name);
    const f = fs.readFileSync(name, { encoding: "base64" });
    //fs.unlink(name, err => err)
    return {
      data,
      file: {
        name,
        base64: data.length > 0 ? f : "",
      },
    };
  }
}
