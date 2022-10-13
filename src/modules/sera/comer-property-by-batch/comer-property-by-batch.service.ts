import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerGoodsXLotEntity } from "./entities/comer-property-by-batch.entity";
import { ComerGoodsXLotDto } from "./dto/comer-property-by-batch.dto";

@Injectable()
export class ComerPropertyByBatchService {
  constructor(
    @InjectRepository(ComerGoodsXLotEntity)
    private entity: Repository<ComerGoodsXLotEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_goods_x_lot_served") public counter: Counter<string>
  ) {}

  async createComerGoodXLot(comerEvent: ComerGoodsXLotDto) {
    return await this.entity.save(comerEvent);
  }

  async getAllComerGoodXLots({ inicio, pageSize }: PaginationDto) {
    const [result, total] = await this.entity.findAndCount({
      order: { goodsLotId: "DESC" },
      take: pageSize || 10,
      skip: (inicio - 1) * pageSize || 0,
    });
    return {
      data: result,
      count: total,
    };
  }

  async getComerXLotByLotId(comerEvent: ComerGoodsXLotDto & PaginationDto) {
    const { lotId, inicio = 1, pageSize = 10  } = comerEvent;
    const events = await this.entity
      .createQueryBuilder("table")
      .where({ lotId })
      .take(pageSize)
      .skip((inicio - 1) * pageSize || 0)
      .orderBy("table.goodsId", "DESC")
      .getMany();

    return events;
  }
}
