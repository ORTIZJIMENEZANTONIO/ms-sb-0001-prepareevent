import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";
const https = require("https");
import { ComerEventEntity } from "../comer-event/entities/comer-event.entity";
import { SentenceDispersionDto } from "./dto/sentence-dispersion.dto";
import { ComerPaymentReferenceEntity } from "./entities/comer-payment-ref.entity";
import { ComerLotEntity } from "../comer-lot/entities/comer-lot.entity";
import { ComerParameterModEntity } from "../current-event/entities/comer-parameter-mod.entity";

@Injectable()
export class ComerSentenceDispersionService {
  constructor(
    @InjectRepository(ComerEventEntity)
    private entityComerEvent: Repository<ComerEventEntity>,
    @InjectRepository(ComerPaymentReferenceEntity)
    private entityComerPaymentRef: Repository<ComerPaymentReferenceEntity>,
    @InjectRepository(ComerLotEntity)
    private entityComerLot: Repository<ComerLotEntity>,
    @InjectRepository(ComerParameterModEntity)
    private entityComerParameterMod: Repository<ComerParameterModEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    @InjectMetric("comer_sentence_served") public counter: Counter<string>
  ) {}

  async setSentenceDispersion(params: SentenceDispersionDto) {
    const { eventId, lotId } = params;
    const event = await this.getPenalty(eventId);
    const lot = await this.getLot(lotId);
    const lvDeftPenalty =
      event.tpEventId == 1 && event.address == "M"
        ? "P_SPBM"
        : event.tpEventId == 2 && event.address == "I"
        ? "P_LCT"
        : event.tpEventId == 4 && event.address == "M"
        ? "P_SEBM"
        : event.tpEventId == 4 && event.address == "I"
        ? "P_SEBM"
        : null;

    const lvDaysLimit = await this.getValueParameter(
      lvDeftPenalty,
      event.address
    );

    if (event.tpEventId == 2) {
      const lvDaysLimit2 = await this.getValueParameter(
        "P_LICT",
        event.address
      );

      if (!lvDaysLimit || !lvDaysLimit2) {
        return null;
      }

      const failDates = await this.getFailDates(
        event.id,
        lvDaysLimit,
        lvDaysLimit2
      );

      const fail1 = failDates.fail + 30;
      const fail2 = failDates.fail2 + 30;
    }
    return "error";
  }

  async getCost(lotId: Number) {
    const costQuery = this.entityComerPaymentRef
      .createQueryBuilder("pr")
      .select([`MONTO as "amount"`, `REFERENCIA as "reference"`])
      .where(`ID_LOTE = ${lotId}`)
      .andWhere(`( IDORDENINGRESO IS NOT NULL OR  VALIDO_SISTEMA = 'S')`);

    return await costQuery.getRawMany();
  }

  async getPenalty(id) {
    const eventQuery = this.entityComerEvent
      .createQueryBuilder(`ev`)
      .select([
        `ID_EVENTO as "id"`,
        `ID_TPEVENTO as "tpEventId"`,
        `ID_ESTATUSVTA as "statusVta"`,
        `DIRECCION as "address"`,
        `FEC_FALLO as "failDate"`,
        `FEC_EVENTO as "eventDate"`,
        `USUARIO as "user"`,
      ])
      .where({ id })
      .andWhere(`ID_TPEVENTO IN (1, 2, 4) `)
      .andWhere(`ID_ESTATUSVTA IN ('VEN','CONC')`);

    return await eventQuery.getRawOne();
  }

  async getLot(lotId: number) {
    const lotQuery = this.entityComerLot
      .createQueryBuilder("lot")
      .select([
        `ID_LOTE as "id"`,
        `ID_ESTATUSVTA as "statusVtaId"`,
        `ID_EVENTO as "eventId"`,
        `LOTE_PUBLICO as "publicLot"`,
        `DESCRIPCION as "description"`,
        `VALOR_BASE as "baseValue"`,
        `ID_CLIENTE as "clientId"`,
        `PRECIO_GARANTIA as "warrantyPrice"`,
        `PRECIO_FINAL as "finalPrice"`,
      ])
      .where(`ID_LOTE = ${lotId}`)
      .andWhere(`ID_CLIENTE IS NOT NULL`);

    return await lotQuery.getRawOne();
  }

  async getValueParameter(lvDeftPenalty: string, address: string) {
    const valueQuery = this.entityComerParameterMod
      .createQueryBuilder()
      .select([`valor as "value"`])
      .where(`PARAMETRO = '${lvDeftPenalty}'`)
      .andWhere(`DIRECCION = '${address}'`);

    return await valueQuery.getRawOne();
  }

  async getFailDates(
    eventId: number,
    lvDaysLimit: number,
    lvDaysLimit2: number
  ) {
    const failDatesQuery = this.entityComerEvent
      .createQueryBuilder()
      .select([
        `FEC_FALLO as "failDate"`,
        `OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${lvDaysLimit}) as "fail"`,
        `OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${lvDaysLimit2}) as "fail2"`,
      ])
      .where(`ID_EVENTO = '${eventId}'`);

    return await failDatesQuery.getRawOne();
  }
}
