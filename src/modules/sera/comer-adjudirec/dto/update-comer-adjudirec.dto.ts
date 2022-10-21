import { ApiProperty } from "@nestjs/swagger";

export class UpdateComerAdjudirecDto {
  @ApiProperty({ example: "ex" })
  eventIdToUpdt: number;
}
