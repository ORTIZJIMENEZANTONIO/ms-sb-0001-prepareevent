import { ApiProperty } from "@nestjs/swagger";

export class ComerClientEntity {
  @ApiProperty({ example: "No. Cliente" })
  idClientToUpdt: number;
}