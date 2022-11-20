import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class UpdateComerAdjudirecDto {
  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED('$property')
  })
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: 1 })
  eventIdToUpdt: number;
}
