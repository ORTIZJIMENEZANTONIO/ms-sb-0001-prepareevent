import { ApiProperty, PartialType } from "@nestjs/swagger";

import { ComerLotsDto } from "./comer-batch.dto";

export class UpdateComerBatchDto extends PartialType(ComerLotsDto) {
  
  lotIdToUpdt?: number;
}