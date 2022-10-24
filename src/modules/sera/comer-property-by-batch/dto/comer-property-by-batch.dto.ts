import { ApiProperty } from "@nestjs/swagger";

export class ComerGoodsXLotDto {
  propertyByLotId: number;

  goodNumber: number;

  lotId: number;

  baseValue: number | null;

  appraisalPriceRef: number | null;

  finalPrice: number | null;

  baseVat: number | null;

  finalVat: number | null;

  vatPercent: number | null;

  camp1: string | null;

  camp2: string | null;

  camp3: string | null;

  camp4: string | null;

  camp5: string | null;

  camp6: string | null;

  camp7: string | null;

  camp8: string | null;

  camp9: string | null;

  quantity: number | null;

  storeNumber: number | null;

  surveyJurKey: string | null;

  appraiserCompany: string | null;

  inventoryNumber: string | null;

  priceWithoutVat: number;

  amountAppVat: number | null;

  amountNoAppVat: number | null;

  previousStatus: string | null;

  appraiserDate: Date | null;

  calcStatus: string | null;

  warrantyPrice: number | null;

  status: string | null;

  transferenceNumber: number | null;

  advance: number | null;

  lotPcts: number | null;

  creationDate: Date | null;

  comerLotId: number | null;

  comerEventId: number | null;

  consignmentEventId: number | null;

  consignmentLotId: number | null;

  consignmentGoodsId: number | null;

  sold: string | null;

  observation: string | null;

  billNumber: string | null;

  billDate: Date | null;

  selected: string | null;

  annex: string | null;

  cylindersNumber: string | null;

  origin: string | null;

  originCountry: string | null;

  lotDescription: string | null;

  delegationNumber: number | null;

  observations2: string | null;

  appraisalId: number | null;

  vatA: string | null;
}
