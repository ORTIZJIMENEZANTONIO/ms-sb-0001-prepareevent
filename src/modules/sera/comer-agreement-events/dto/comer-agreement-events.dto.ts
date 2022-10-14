import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

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

  @IsDateString()
  @IsOptional()
  dates: string | null;

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
