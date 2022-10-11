import { ApiProperty } from "@nestjs/swagger";

export class ComerClientDto {
  @ApiProperty({ example: "No. Cliente" })
  idClientToUpdt: number;
}