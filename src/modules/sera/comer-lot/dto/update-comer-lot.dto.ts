import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
} from "class-validator";

import { Message } from "src/shared/validation-messages/message";
import { ComerLotDto } from "./comer-lot.dto";

export class UpdateComerLotDto extends PartialType(ComerLotDto) {
  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: 1, required: false })
  lotIdToUpdt?: number;
}