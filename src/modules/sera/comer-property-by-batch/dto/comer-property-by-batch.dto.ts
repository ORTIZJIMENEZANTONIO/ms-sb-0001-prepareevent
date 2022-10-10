import { ApiProperty } from "@nestjs/swagger";

export class ComerPropertyByBatchEntity {
  @ApiProperty({ example: "No. bien por lote" })
  goodsLoteId: number;

  goodsId: number;

  lotId: number;

  baseValue: number | null;

  valuReferential: number | null;

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

  storeNo: number | null;

  expertiseCve: string | null;

  appraiserEnterprise: string | null;

  inventoryId: string | null;

  noVatPrice: number;

  vatAppAmount: number | null;

  vatAmountId: number | null;

  antStatus: string | null;

  appraiserDate: Date | null;

  calcStatus: string | null;

  warrantyPrice: number | null;

  eatStatus: string | null;

  transferenceId: number | null;

  advance: number | null;

  lotPcts: number | null;

  creationDate: Date | null;

  eatLotId: number | null;

  eatEventId: number | null;

  consignmentEventId: number | null;

  consignmentLotId: number | null;

  consignmentGoodsId: number | null;

  sold: string | null;

  observation: string | null;

  billId: string | null;

  billDate: Date | null;

  selected: string | null;

  annex: string | null;

  cylindersId: string | null;

  origin: string | null;

  originCountry: string | null;

  loteDescription: string | null;

  delegationId: number | null;

  observations2: string | null;

  appraisalId: number | null;

  vatA: string | null;
}
