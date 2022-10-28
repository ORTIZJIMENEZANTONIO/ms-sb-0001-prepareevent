import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { ActGoodLotMDto } from "./dto/actGoodLotM.dto";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { GoodsEntity } from "./entities/goods.entity";
import { ComerLotsEntity } from "../comer-batch/entities/comer-batch.entity";
import { PaRejectDto } from "./dto/reject.dto";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { CatTransferentEntity } from "./entities/cat-transferent.entity";
import { RecordEntity } from "./entities/record.entity";
import { ParameterModEntity } from "./entities/comer-parameter-mod.entity";

@Injectable()
export class PaProcessService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @InjectRepository(GoodsEntity)
    private entityGoods: Repository<ComerEventEntity>,
    @InjectRepository(ComerLotsEntity)
    private entityComerLot: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("pa_process_served") public counter: Counter<string>
  ) {}

  async paActGoodLotMDto(params: ActGoodLotMDto) {
    const { lotId, goodNumber, address } = params;
    const good = await this.entityGoods
      .createQueryBuilder()
      .select([`NO_CLASIF_BIEN as "vClasif"`, `CANTIDAD as "vQuantity"`])
      .where(`NO_BIEN=${goodNumber}`)
      .getRawOne();

    const comerLotSubquery = this.entityComerLot
      .createQueryBuilder()
      .select(`ID_EVENTO as "eventId"`)
      .where(`ID_LOTE = ${lotId}`);

    const event = await this.entityComerEvent
      .createQueryBuilder()
      .select([`ID_TPEVENTO`, `ID_EVENTO`])
      .where(`ID_EVENTO = (${comerLotSubquery.getQuery()})`)
      .getRawOne();
  }

  async paReject(params: PaRejectDto) {
    const { eventId, goodNumber, eventType, lotId, address, origin, pubLot } =
      params;

    const prQuery = this.entityGoods
      .createQueryBuilder("BIE")
      .select([`BIE.NO_BIEN`, `BIE.DESCRIPCION`, `BIE.ESTATUS`, ``])
      .addFrom(ComerGoodsXLotEntity, "BL")
      .addFrom(CatTransferentEntity, "CAT")
      .addFrom(RecordEntity, "EXD")
      .addFrom(ParameterModEntity, "PAR ")
      .where(`NOT EXISTS (SELECT 1 FROM BIENES_TRANS_AVA AVA WHERE AVA.NO_BIEN = BIE.NO_BIEN)`)
      .andWhere(`BL.NO_BIEN = BIE.NO_BIEN`)
      .andWhere(`BL.ID_LOTE=${lotId}`)
      .andWhere(`BL.NO_BIEN=${goodNumber})`)

    console.log(prQuery.getQuery())
  }
}
