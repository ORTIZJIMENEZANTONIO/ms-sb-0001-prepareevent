import { ApiProperty } from "@nestjs/swagger";

export class UpdateComerConvEventDto {
  @ApiProperty({ example: "ex" })
  idEvent: string;

  noAnnouncementEvent: string;
}
