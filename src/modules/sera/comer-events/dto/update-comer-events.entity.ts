import { ApiProperty, PartialType } from "@nestjs/swagger";

import { ComerEventDto } from "./comer-events.dto";

export class UpdateComerEventDto extends PartialType(ComerEventDto) {
  @ApiProperty({ example: "No. Evento" })
  idEventToUpdt: number | null;
}
