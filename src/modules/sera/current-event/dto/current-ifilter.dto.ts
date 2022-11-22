import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class CurrentFilterDto {
  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED('$property')
  })
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @ApiProperty({ example: 2, maxLength: 2 })
  month: number;
  
  @Type(() => Number)
  @IsNotEmpty({
    message: Message.REQUIRED('$property')
  })
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @ApiProperty({ example: 2022, maxLength: 4 })
  year: number;
}
