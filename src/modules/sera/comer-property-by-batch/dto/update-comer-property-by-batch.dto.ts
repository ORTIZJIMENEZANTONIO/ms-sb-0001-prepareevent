import { ApiProperty } from "@nestjs/swagger";
// Pending
export class UpdateComerPropertyByBatchDto {
  @ApiProperty({ example: "No. bien por lote" })
  goodsLotIdToUpdt: number;

  goodsIdToUpdt: number;

  lotIdToUpdt: number;
}
