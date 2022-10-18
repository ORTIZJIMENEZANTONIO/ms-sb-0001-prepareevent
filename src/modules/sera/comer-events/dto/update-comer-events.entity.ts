import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

import { ComerEventDto } from "./comer-events.dto";

export class UpdateComerEventDto extends PartialType(ComerEventDto) {
  @IsNumber()
  @IsPositive()
  eventIdToUpdt: number;
}
