import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerAdjudirecDto {

  @IsNumber()
  eventId: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  committee: string | null;

  @IsDateString()
  @IsOptional()
  sessionDate: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  noSession: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  creationUser: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  userWhoProposed: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  userWhoFormulated: string | null;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  physicalCondition: string | null;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  observation: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  valudi: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  amountDis: number | null;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  tendered: string | null;

  @IsDateString()
  @IsOptional()
  udiDate: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  wayToPay: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  text1: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  text2: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  text3: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  receptionDate: string | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  bookValue: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  valMaxUdi: number | null;

  @IsString()
  @MaxLength(7)
  @IsOptional()
  cause: string | null;
}
