import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

import { Message } from "src/shared/validation-messages/message";
export class GoodNotDeliveredDto {
  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  lotIdNew: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  lotId: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  bxlId: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  lotConsignment: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  bxlConsignment: number;
}
