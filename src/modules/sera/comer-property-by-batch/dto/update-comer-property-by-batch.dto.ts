import { ApiProperty } from "@nestjs/swagger";
// Pending
export class ComerPropertyByBatchEntity {
  @ApiProperty({ example: "No. bien por lote" })
  idGoodsBatchToUpdt: number;

  idGoodsToUpdt: number;

  idBatchToUpdt: number;
}
