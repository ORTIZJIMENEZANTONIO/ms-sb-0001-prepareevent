import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Message } from "src/shared/validation-messages/message";

import { ComerEventDto } from "./comer-events.dto";

export class UpdateComerEventDto extends PartialType(ComerEventDto) {
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
  @ApiProperty({ example: null, required: false })
  eventIdToUpdt: number;
}
