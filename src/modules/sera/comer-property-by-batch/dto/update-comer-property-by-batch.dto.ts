import { ApiProperty } from "@nestjs/swagger";
// Pending
export class UpdateComerPropertyByBatchDto {
  @ApiProperty({ example: "No. bien por lote" })
  idGoodsBatchToUpdt: number;

  idGoodsToUpdt: number;

  idBatchToUpdt: number;
}
