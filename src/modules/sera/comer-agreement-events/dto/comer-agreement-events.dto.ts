import { Transform, Type } from "class-transformer";
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

import { Message } from "src/shared/validation-messages/message";

export class ComerConvEventDto {
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
  @IsPositive({ message: Message.POSITIVE("$property") })
  eventId: number;
  
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
  announcementEventId: number;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$pŕopérty") })
  @MaxLength(200, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  description: string | null;

  @Type(() => String)
  @IsOptional()
  @IsNotEmpty({ message: Message.REQUIRED("$property") })
  @IsString({ message: Message.STRING("$pŕopérty") })
  @MaxLength(70, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  dates: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$pŕopérty") })
  @MaxLength(70, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  schedule: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$pŕopérty") })
  @MaxLength(200, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  place: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({ message: Message.STRING("$pŕopérty") })
  @MaxLength(500, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  restriction: string | null;
}
