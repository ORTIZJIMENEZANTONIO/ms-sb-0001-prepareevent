import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from "class-validator";

import { Message } from "src/shared/validation-messages/message";
export class UpdateComerConvEventDto {
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
  @IsPositive()
  @ApiProperty({ example: 1})
  eventIdToUpdt: number;

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
  @IsPositive()
  @ApiProperty({ example: 1})
  announcementEventIdToUpdt: number;
  
}
