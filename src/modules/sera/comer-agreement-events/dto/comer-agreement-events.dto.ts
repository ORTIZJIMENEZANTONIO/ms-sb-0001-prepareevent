import { Transform } from "class-transformer";
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
import { toDate, toLowerCase } from "src/shared/common/helper/cast.helper";

export class ComerConvEventDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  eventId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  announcementEventId: number;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  description: string | null;

  //@Transform(({ value }) => toDate(value))
  @IsDateString({message: "Formato incorrecto"})
  @IsNotEmpty({message: "fechas requerida"})
  dates: string;

  @IsString()
  @MaxLength(70)
  @IsOptional()
  schedule: string | null;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  place: string | null;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  restriction: string | null;
}
