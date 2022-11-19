import { ApiProperty, PartialType } from "@nestjs/swagger";

import { ComerLotDto } from "./comer-lot.dto";

export class UpdateComerLotDto extends PartialType(ComerLotDto) {
  
  lotIdToUpdt?: number;
}