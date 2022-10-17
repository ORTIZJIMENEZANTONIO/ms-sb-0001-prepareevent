import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import * as xlsx from "xlsx";
import * as fs from "fs";

import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
@Injectable()
export class FileUtilService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("file_util_served") public counter: Counter<string>
  ) {}

  private path = "src/files/";

  async makeFile(data) {
    const queryBuilder = [{ campo1: ["campo1", "campo1A"] }];
    const workSheet = xlsx.utils.json_to_sheet(queryBuilder);
    const workBook = xlsx.utils.book_new();
    const name = `${this.path}${new Date().getTime()}.xlsx`;
    xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel");
    await xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    await xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    await xlsx.writeFile(workBook, name);
    const f = fs.readFileSync(name, { encoding: "base64" });
    //fs.unlink(name, err => err)
    return {
      data: queryBuilder,
      file: {
        name: "PUP_LANZA_REPORTE.xlsx",
        base64: queryBuilder.length > 0 ? f : "",
      },
    };
  }

  async createThirdFile(fileName: string, eventNumber: number) {}
  //const queryBuilder = 
  
  /**
  SELECT 
    NVL(CAT.CVMAN,'0'), 
    LOT.LOTE_PUBLICO, 
    BXL.NO_BIEN, 
    NVL(BXL.CANTIDAD, 
    BIE.CANTIDAD),
    NVL(BXL.CAMPO1, 
    BIE.DESCRIPCION), -- DESCRIPCION
    NVL(BXL.CAMPO2, 
    LOT.DESCRIPCION),-- DESC GENERICA
    BXL.CAMPO3, -- TIPO
    BXL.CAMPO4, -- MARCA
    BXL.CAMPO5, -- SUBMARCA
    BXL.CAMPO6, -- MODELO
    BXL.CAMPO7, -- NOSERIE
    BXL.CAMPO8, -- NOMOTOR
    BXL.CAMPO9,  -- NODECABINA
    NVL(ALM.DESCRIPCION,'DESCONOCIDA') UBICA,
    BIE.ESTATUS,
    DECODE(CA.NO_TIPOBIEN_ALTERNO,5,'VEHICULO',4,'VEHICULO',3,'VEHICULO',7,'INMUEBLE','MERCANCIA'),
    DRM.DESCRIPCION DELEGACAP,
    BXL.ID_EVENTO_REMESA REMESA,
    LRM.LOTE_PUBLICO LOTEREM,
    TO_CHAR(BXL.FECHA_CREACION,'DD/MM/YYYY') FECHA,
    BIE.UNIDAD,
    TO_CHAR(BRM.FECHA_CREACION,'DD/MM/YYYY') FECHA2,
    DECODE(LOT.ID_ESTATUSVTA,'PAG','S','PAGE','S','N') VENDIDO,
    TO_CHAR(EXP.NO_TRANSFERENTE),
    CAT.CLAVE,
    ERM.CVE_PROCESO,
    G.DESCRIPCION,
    DESC_SUBTIPO,
    DESC_SSUBTIPO,
    DESC_SSSUBTIPO,
    BIE.NO_CLASIF_BIEN                  
  FROM 
    COMER_EVENTOS EVE, --
    COMER_LOTES LOT, --
    CAT_TRANSFERENTE CAT, 
    COMER_BIENESXLOTE BXL, --
    BIENES BIE, 
    EXPEDIENTES EXP,
    CAT_ALMACENES ALM, 
    COMER_EVENTOS ERM, 
    CAT_DELEGACIONES DRM,
    ( SELECT 
        TAL.NO_TIPOBIEN_ALTERNO, 
        CTA.NO_CLASIFICACION_ALTERNA, 
        CTA.NO_CLASIF_BIEN
      FROM CLASIF_EN_TIPOBIEN_ALTERNO CTA, TIPOBIEN_ALTERNO TAL
      WHERE CTA.NO_CLASIFICACION_ALTERNA    = TAL.NO_CLASIFICACION_ALTERNA
        AND CTA.NO_CLASIFICACION_ALTERNA(+) = 4
        AND CTA.NO_TIPOBIEN_ALTERNO         = TAL.NO_TIPOBIEN_ALTERNO
    ) CA,
    COMER_LOTES LRM, COMER_BIENESXLOTE BRM, V_TIPO_BIEN D, CAT_ETIQUETA_BIEN G
  WHERE EVE.ID_EVENTO                   = eventNumber
    AND LOT.ID_EVENTO                   = EVE.ID_EVENTO
    AND BXL.ID_LOTE                     = LOT.ID_LOTE
    AND BIE.NO_BIEN                     = BXL.NO_BIEN
    AND BIE.NO_EXPEDIENTE               = EXP.NO_EXPEDIENTE
    AND EXP.NO_TRANSFERENTE             = CAT.NO_TRANSFERENTE(+)
    AND ALM.NO_ALMACEN(+)               = BIE.NO_ALMACEN
    AND LOT.LOTE_PUBLICO                > 0
    AND CA.NO_CLASIF_BIEN(+)           = BIE.NO_CLASIF_BIEN
    AND BXL.NO_BIEN                     = BRM.NO_BIEN
    AND BRM.ID_LOTE                     = LRM.ID_LOTE
    AND ERM.ID_EVENTO                   = FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
    AND LRM.ID_EVENTO                   = FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','E')
    AND LRM.ID_LOTE                     = FA_DEV_LOTE_EVENTO(BXL.NO_BIEN, 'R','L')
    AND ERM.NO_DELEGACION               = DRM.NO_DELEGACION(+)  
    AND DRM.ETAPA_EDO                = FA_ETAPACREDA(BXL.FECHA_CREACION)
    AND BIE.NO_CLASIF_BIEN           = D.NO_CLASIF_BIEN
    AND BIE.NO_ETIQUETA              = G.NO_ETIQUETA
  ORDER BY 2,3;
   */
}
