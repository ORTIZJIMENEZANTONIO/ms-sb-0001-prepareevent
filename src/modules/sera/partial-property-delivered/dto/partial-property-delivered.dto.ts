import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class PartialPropertyDelivered {
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
  goodNumber: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  ldevcant: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  previosGood: number;
}
