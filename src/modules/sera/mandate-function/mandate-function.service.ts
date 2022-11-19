import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { MandateFunctionDto } from "./dto/mandate-function.dto";

@Injectable()
export class MandateFunctionService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private comerGoodsXLotRepository: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(ComerLotEntity)
    private comerLotsRepository: Repository<ComerLotEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("mandate_function_served") public counter: Counter<string>
  ) {}

  async updateMandate(params: MandateFunctionDto) {
    const { lotId, goodId, lotIdToUdate } = params;
    const elementsUpdated = {
      transferentNums: null,
      lotUpdt: null
    }
    if (goodId == 1) {
      elementsUpdated.transferentNums = await this.comerLotsRepository.query(`
        UPDATE	sera.COMER_BIENESXLOTE BXL
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
            FROM		sera.EXPEDIENTES EXP, sera.BIENES BIE1
            WHERE		EXP.NO_EXPEDIENTE = BIE1.NO_EXPEDIENTE
            AND			BXL.NO_BIEN       = BIE1.NO_BIEN
        )
        WHERE			BXL.ID_LOTE = ${lotIdToUdate}
      `);
      
    }

    if (lotId == 1) {
      elementsUpdated.lotUpdt = await this.comerLotsRepository.query(`
        UPDATE	sera.COMER_LOTES LOT
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
          FROM		sera.COMER_BIENESXLOTE BXL
          WHERE		BXL.ID_LOTE = ${lotIdToUdate}
          LIMIT 1
        )
        WHERE		LOT.ID_LOTE = ${lotIdToUdate}
      `)
    }
    //console.log( elementsUpdated )
    if( elementsUpdated.lotUpdt == null && elementsUpdated.transferentNums == null) return null

    return elementsUpdated;
  }
}
