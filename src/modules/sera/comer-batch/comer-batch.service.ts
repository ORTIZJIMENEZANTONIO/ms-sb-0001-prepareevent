import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

import { PaginationDto } from "src/shared/dto/pagination.dto";
import { ComerLotsDto } from "./dto/comer-batch.dto";
import { ComerLotsEntity } from "./entities/comer-batch.entity";
import { ComerEventEntity } from "../comer-events/entities/comer-events.entity";
import { UpdateComerBatchDto } from "./dto/update-comer-batch.dto";
import { ComerGoodsXLotEntity } from "../comer-property-by-batch/entities/comer-property-by-batch.entity";
import { ComerLotCanceledDto } from "./dto/comer-lot-canceled.dto";

@Injectable()
export class ComerBatchService {
  constructor(
    @InjectRepository(ComerLotsEntity)
    private entity: Repository<ComerLotsEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_lot_served") public counter: Counter<string>
  ) {}

  /***************************************
  CREAR LOTE CANCELADO CON EL BIEN VIEJO
  ****************************************/
  async createComerLotCanceled({
    pLotId,
    pEventId,
    pLotPubId,
    pGood,
  }: ComerLotCanceledDto) {
    const clcLotId = await this.entity.query(
      `SELECT NEXTVAL('sera.SEQ_COMER_LOTES') as val;`
    );
    const clcLotPubId = await this.entity
      .createQueryBuilder()
      .select([`MAX(LOTE_PUBLICO) + 1 AS max`])
      .where(`ID_EVENTO = ${pEventId}`)
      .getRawOne();

    const clcDescription = `DEVOLUCION PARCIAL DEL BIEN ${pGood} LOTE ${pLotPubId}`;

    const lotToCancel = await this.getLotToCancel(pLotId, pGood);

    const body: ComerLotsDto = {
      description: clcDescription,
      publicLot: clcLotPubId.max,
      id: clcLotId[0].val,
      originLot: pLotId,
      statusVtaId: 'CAN',
      goodsNumber: 1,
      ...lotToCancel,
    };
   
    return await this.entity.save(body);
  }

  async createComerLot(comer: ComerLotsDto) {
    const comerExisting = await this.entity.findOneBy({
      id: comer.id,
    });

    if (comerExisting) {
      return {
        statusCode: 501,
        message: "ComerLot existing",
      };
    }
    return await this.entity.save(comer);
  }

  async getAllComersLot(pagination: PaginationDto) {
    this.counter.inc();
    const { inicio = 1, pageSize = 10 } = pagination;
    const result = await this.entity
      .createQueryBuilder("cl")
      .innerJoinAndMapOne(
        "cl.eventId",
        ComerEventEntity,
        "ce",
        "cl.eventId = ce.eventId"
      )
      .orderBy({ "cl.publicLot": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getComerLotByEventId(comer: ComerLotsDto & PaginationDto) {
    const { eventId, inicio = 1, pageSize = 19 } = comer;
    const result = await this.entity
      .createQueryBuilder("cl")
      .innerJoinAndMapOne(
        "cl.eventId",
        ComerEventEntity,
        "ce",
        "cl.eventId = ce.eventId"
      )
      .where({ eventId })
      .orderBy({ "cl.publicLot": "DESC" })
      .skip((inicio - 1) * pageSize || 0)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result[0] ?? [],
      count: result[1] ?? 0,
    };
  }

  async getLotToCancel(lotId: number, goodNumber: number) {
    const lotQuery = this.entity
      .createQueryBuilder("lot")
      .select([
        `LOT.ID_EVENTO as "eventId"`,
        `LOT.VALOR_BASE as "baseValue"`,
        `LOT.ID_CLIENTE as "customerId"`,
        `LOT.PRECIO_GARANTIA as "warrantyPrice"`,
        `BXL.NO_TRANSFERENTE as "transferenceNumber"`,
        `BXL.PRECIO_FINAL as "finalPrice"`,
        `BXL.IVA_FINAL as "lotVat"`,
        `BXL.PRECIO_SIN_IVA as "amountAppVat"`,
        `BXL.MONTO_NOAPP_IVA as "amountWithoutVat"`,
        `LOT.REFERENCIAG as "referenceG"`,
        `LOT.REFERENCIAL as "referential"`,
        `LOT.VALIDO_SISTEMA as "systemValid"`,
        `BXL.MONTO_NOAPP_IVA as "amountNoAppVat"`,
        `LOT.PORC_APP_IVA as "vatAppPercentage"`,
        `LOT.PORC_NOAPP_IVA as "vatNoAppPercentage"`,
        `LOT.COORDINACION_REG as "regCoordination"`,
        `LOT.COORDINADOR_REG as "regCoordinator"`,
        `LOT.DATO_FISC_MAND as "fiscMandFact"`,
        `LOT.UBICACION as "ubication"`,
        `LOT.ESASIGNADO as "assignedEs"`,
        `LOT.ESCHATARRA as "scrapEs"`,
        `LOT.NO_DELEGACION as "delegationNumber"`,
        `LOT.SOLICITA as "request"`,
        `LOT.MONTO_RETENIDO as "withheldAmount"`,
      ])
      .addFrom(ComerGoodsXLotEntity, "bxl")
      .where(`LOT.ID_LOTE = BXL.ID_LOTE`)
      .andWhere(`LOT.ID_LOTE = ${lotId}`)
      .andWhere(`BXL.NO_BIEN = ${goodNumber}`);

    return await lotQuery.getRawOne();
  }

  async updateComerLot(
    { lotIdToUpdt }: UpdateComerBatchDto,
    comer: ComerLotsEntity
  ) {
    const data = await this.entity.findOne({
      where: { id: lotIdToUpdt },
    });

    if (data) {
      delete comer.id;
      this.entity.merge(data, comer);
      return this.entity.save(data);
    }
    return false;
  }

  async deleteComerLot(comer: ComerLotsDto) {
    const { id } = comer;
    return await this.entity.delete({ id });
  }
}
