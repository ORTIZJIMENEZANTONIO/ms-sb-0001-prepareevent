import { ApiProperty } from "@nestjs/swagger";

export class UpdateComerEventDto {
  @ApiProperty({ example: "No. Evento" })
  idEventToUpdt: number;
}
