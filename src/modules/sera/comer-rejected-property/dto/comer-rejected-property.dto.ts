import { ApiProperty } from "@nestjs/swagger";

export class ComerRejectedGoodDto {
  @ApiProperty({ example: 1 })
  rejectedGoodId: number;

  idEvent: number;

  noProperty: number;

  origin: string | null;

  description: string | null;

  status: string | null;

  cause: string | null;

  event: number| null;

  batchPublic: number | null;

  rejectedReason: number | null;

  batchOrigin: number | null;

}
