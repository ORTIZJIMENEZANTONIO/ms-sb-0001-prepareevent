import { Injectable, Inject, Logger, NotFoundException } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

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
    const { eventId, lotId, uspen } = params;
    const event = await this.getPenalty(eventId);
    const lot = await this.getLot(lotId);
    const lotCost = await this.getCost(lotId);
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
    let finalPrice = 0;
    const lvDaysLimit =
      (await this.getValueParameter(lvDeftPenalty, event.address)) || 0;

    if (event.tpEventId == 2) {
      const daysLimit2 = await this.getValueParameter("P_LICT", event.address);
      const lvDaysLimit2 = daysLimit2.value || null;

      const { now, failDate, fail, fail2 } = await this.getFailDates(
        event.id,
        lvDaysLimit,
        lvDaysLimit2
      );
      const nowDate = new Date(now);
      const failC1 = fail + 30;
      const failC2 = fail2.setDate(fail2.getDate(), 30);

      if (nowDate > fail && nowDate < fail2) {
        const lvIdPenaltyArray = await this.getLvIdPenalty(
          lot.clientId,
          lot.eventId,
          lot.id
        );
        const lvIdPenalty = lvIdPenaltyArray[0].total;

        if (lvIdPenalty == 0) {
          let referenceType = 0;
          for (const cost of lotCost) {
            finalPrice = Number(cost.amount) + finalPrice;
            referenceType = Number(cost.reference.substr(1, 1));
          }
          const lsValor25 = Number(lot.finalPrice);
          const vIdPenalty = referenceType == 2 || referenceType == 7 ? 5 : 6;

          if (lsValor25 < finalPrice) {
            await this.insertIntoComerPnalties(
              lot.clientId,
              lot.eventId,
              lot.id,
              lot.publicLot,
              vIdPenalty,
              failC1,
              fail,
              uspen,
              event.tpEventId
            );
            return "Penalización creada correctamente";
          }
        }
      } else if (nowDate > fail2) {
        const lvIdPenaltyArray = await this.getLvIdPenalty(
          lot.clientId,
          lot.eventId,
          lot.id
        );
        const lvIdPenalty = lvIdPenaltyArray[0].total;

        if (lvIdPenalty == 0) {
          let referenceType = 0;
          for (const cost of lotCost) {
            finalPrice = Number(cost.amount) + finalPrice;
            referenceType = Number(cost.reference.substr(1, 1));
          }
          const lsValor25 = Number(lot.finalPrice) * 0.25;
          const vIdPenalty = referenceType == 2 || referenceType == 7 ? 5 : 6;

          if (lsValor25 < finalPrice) {
            await this.insertIntoComerPnalties(
              lot.clientId,
              lot.eventId,
              lot.id,
              lot.publicLot,
              vIdPenalty,
              failC1,
              fail,
              uspen,
              event.tpEventId
            );

            return "Penalización creada correctamente";
          }
        }
      }
    } else if (event.tpEventId == 1 || event.tpEventId == 4) {
      const { now, failDate, fail, fail2 } = await this.getFailDates(
        event.id,
        lvDaysLimit,
        null
      );
      const nowDate = new Date(now);
      const failIn = fail.setDate(fail.getDate(), 30);

      if (nowDate > fail) {
        const lvIdPenaltyArray = await this.getLvIdPenalty(
          lot.clientId,
          lot.eventId,
          lot.id
        );
        const lvIdPenalty = lvIdPenaltyArray[0].total;
        const dateInOpen = fail.setDate(fail.getDate(), 30);

        if (lvIdPenalty == 0) {
          let referenceType = 0;
          for (const cost of lotCost) {
            finalPrice = Number(cost.amount) + finalPrice;
            referenceType = Number(cost.reference.substr(1, 1));
          }
          const lsValor25 = Number(lot.finalPrice) * 0.25;
          const vIdPenalty = referenceType == 2 || referenceType == 7 ? 4 : 6;

          if (lsValor25 < finalPrice) {
            await this.insertIntoComerPnalties(
              lot.clientId,
              lot.eventId,
              lot.id,
              lot.publicLot,
              vIdPenalty,
              dateInOpen,
              fail,
              uspen,
              event.tpEventId
            );
            return "Penalización creada correctamente";
          }
        }
      }
    }
    return "Datos sin coincidencia";
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
    lvDaysLimit2: number | null
  ) {
    const failDatesQuery = this.entityComerEvent
      .createQueryBuilder()
      .select([
        `to_char(now(), 'YYYY-MM-DD') as "now"`,
        `FEC_FALLO as "failDate"`,
        `sera.OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${lvDaysLimit}) as "fail"`,
        `sera.OBTENER_POST_FECHA_HABIL(FEC_FALLO, ${
          lvDaysLimit2 || lvDaysLimit
        }) as "fail2"`,
      ])
      .where(`ID_EVENTO = ${eventId}`);
    return await failDatesQuery.getRawOne();
  }

  async getLvIdPenalty(clientId, eventId, lotId) {
    return await this.entityComerEvent.query(`
      SELECT COUNT (1) as "total"
      FROM sera.COMER_PENALIZACIONES -- _TPENALIZA
      WHERE ID_CLIENTE = ${clientId}
        AND ID_EVENTO  = ${eventId}
        AND ID_LOTE      = ${lotId}`);
  }

  async insertIntoComerPnalties(
    clientId: number,
    eventId: number,
    lotId: number,
    publicLot: number,
    vIdPenalty: number,
    failC1: Date,
    fail: Date,
    uspen: String,
    tpEventId: number
  ) {
    const insertQuery = `
      INSERT INTO sera.COMER_PENALIZACIONES(
        ID_CLIENTE,    
        ID_EVENTO,         
        ID_LOTE,         
        LOTE_PUBLICO,    
        ID_PENALIZACION,   
        REFE_OFICIO_OTRO,
        FECHA_FINAL,    
        FECHA_INICIAL,      
        USUARIO,        
        TIPO_PROCESO,    
        P_BANDERA
      )
      VALUES (
        ${clientId},    
        ${eventId}, 
        ${lotId},   
        ${publicLot} ,  
        ${vIdPenalty},  
        'AUTOMATICO',
        '${new Date(failC1).toISOString().substring(0, 10)}',  
        '${new Date(fail).toISOString().substring(0, 10)}',         
        '${uspen}',      
        ${tpEventId},
        1
      );
      `;

    return await this.entityComerEvent.query(insertQuery);
  }
}
