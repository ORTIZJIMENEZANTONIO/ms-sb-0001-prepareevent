import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class UpdateComerClientDto {
  @IsNumber()
  clientIdToUpdt: number;
}