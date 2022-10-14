import { ApiProperty } from "@nestjs/swagger";

export class UpdateComerClientDto {
  @ApiProperty({ example: "No. Cliente" })
  idClientToUpdt: number;
}