import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

import { Message } from "src/shared/validation-messages/message";
import { ComerGoodsXLotDto } from "./comer-property-by-lot.dto";
// Pending
export class UpdateComerGoodsXLotDto extends PartialType(ComerGoodsXLotDto) {
  goodIdToUpdt: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @ApiProperty({ example: 1, required: true })
  lotIdToUpdt: number;
}
