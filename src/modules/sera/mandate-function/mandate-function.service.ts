import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { MandateFunctionDto } from "./dto/mandate-function.dto";

@Injectable()
export class MandateFunctionService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private comerGoodsXLotRepository: Repository<ComerGoodsXLotEntity>,
    @InjectRepository(ComerLotsEntity)
    private comerLotsRepository: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("mandate_function_served") public counter: Counter<string>
  ) {}

  async updateMandate(params: MandateFunctionDto) {
    const { lotId, goodId } = params;
    console.log( lotId, goodId )
    if (goodId == 1) {
      const transferentNums = await this.comerLotsRepository.query(`
        UPDATE	sera.COMER_BIENESXLOTE BXL
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
            FROM		sera.EXPEDIENTES EXP, sera.BIENES BIE1
            WHERE		EXP.NO_EXPEDIENTE = BIE1.NO_EXPEDIENTE
            AND			BXL.NO_BIEN       = BIE1.NO_BIEN
        )
        WHERE			BXL.ID_LOTE = ${'22199'};
      `);
      console.log(transferentNums)
    }

    if (lotId == 1) {
      this.comerLotsRepository.query(`
        UPDATE	COMER_LOTES LOT
        SET			NO_TRANSFERENTE = (	
          SELECT	NO_TRANSFERENTE
          FROM		COMER_BIENESXLOTE BXL
          WHERE		BXL.ID_LOTE = :COMER_LOTES.ID_LOTE
          AND			ROWNUM 			= 1
        )
        WHERE		LOT.ID_LOTE = :COMER_LOTES.ID_LOTE;
      `)
    }
    return { success: true}
  }
}
