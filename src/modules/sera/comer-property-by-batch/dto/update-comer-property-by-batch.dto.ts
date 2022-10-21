import { ApiProperty, PartialType } from "@nestjs/swagger";
import { ComerGoodsXLotDto } from "./comer-property-by-batch.dto";
// Pending
export class UpdateComerGoodsXLotDto extends PartialType(ComerGoodsXLotDto) {
  goodIdToUpdt: number;

  lotIdToUpdt: number;
}
