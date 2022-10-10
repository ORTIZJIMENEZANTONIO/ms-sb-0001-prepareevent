import { ApiProperty } from "@nestjs/swagger";

export class ComerEventEntity {
  @ApiProperty({ example: "No. Evento" })
  idEventToUpdt: number;
}
