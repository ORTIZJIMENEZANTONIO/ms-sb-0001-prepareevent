import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
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
  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: null, required: false })
  id: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  committee: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  sessionDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  noSession: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  creationUser: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  userWhoProposed: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  userWhoFormulated: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 100 })
  physicalCondition: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(250, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 250 })
  observation: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  @ApiProperty({ example: null, required: false })
  valudi: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  @ApiProperty({ example: null, required: false })
  amountDis: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 2 })
  tendered: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  udiDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  wayToPay: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(800, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 800 })
  text1: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 100 })
  text2: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1500, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1500 })
  text3: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  receptionDate: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  bookValue: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive()
  @ApiProperty({ example: null, required: false })
  valMaxUdi: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 100 })
  cause: string | null;
}
