import { ApiProperty } from "@nestjs/swagger";

export class ComerConvEventDto {
  
  @ApiProperty({ example: "ex" })
  eventId: number;

  announcementEventId: number;

  description: string | null;

  dates: string | null;

  schedule: string | null;

  place: string | null;

  restriction: string | null;

}
