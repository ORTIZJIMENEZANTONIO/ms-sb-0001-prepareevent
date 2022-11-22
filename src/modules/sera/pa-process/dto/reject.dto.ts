import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class PaRejectDto {

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  eventId: number;

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
  eventType: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  lotId: number;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @ApiProperty({ example: "2" })
  address: string;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @ApiProperty({ example: "2" })
  origin: string;

  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsNumber({}, { message: Message.NUMBER("$property") })
  @ApiProperty({ example: 2 })
  pubLot: number;
}
