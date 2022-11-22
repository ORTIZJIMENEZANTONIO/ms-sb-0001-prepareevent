import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class GoodPartialDeliveryDto {

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @ApiProperty({ example: "2" })
  id: string;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @ApiProperty({ example: "2" })
  nePartialGoddNumber: string;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({ message: Message.STRING("$property") })
  @ApiProperty({ example: "2" })
  enPartialGoddNumber: string;

  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: Message.IsDate("$property") })
  @ApiProperty({ example: null, required: false })
  date: Date | null;
}
