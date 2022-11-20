import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class UpdateComerAdjudirecDto {
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: 1 })
  eventIdToUpdt: number;
}
