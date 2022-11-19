import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class ComerAdjudirecDto {
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  id: number | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  committee: string | null;

  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  sessionDate: Date | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  noSession: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  creationUser: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  userWhoProposed: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  userWhoFormulated: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  physicalCondition: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(250, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  observation: string | null;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  valudi: number | null;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  amountDis: number | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  tendered: string | null;

  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  udiDate: Date | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  wayToPay: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  text1: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  text2: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  text3: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  receptionDate: string | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  bookValue: string | null;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  valMaxUdi: number | null;

  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(7, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  cause: string | null;
}
