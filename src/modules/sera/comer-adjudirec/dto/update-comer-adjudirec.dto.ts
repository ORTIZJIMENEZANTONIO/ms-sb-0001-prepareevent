import { ApiProperty } from "@nestjs/swagger";

export class ComerAdjudirecDto {
  @ApiProperty({ example: "ex" })
  eventIdToUpdt: number;
}
