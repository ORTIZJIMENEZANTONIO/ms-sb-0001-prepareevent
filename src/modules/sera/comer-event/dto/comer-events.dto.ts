import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
} from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class ComerEventDto {
  @Type(() => Number)
  @IsOptional()
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
  id: number | null;

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
  @ApiProperty({ example: 1, required: true })
  eventTpId: number;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4 })
  statusVtaId: string;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  processKey: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(300, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 300 })
  observations: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  address: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  failureDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 100 })
  place: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  eventDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  text1: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  text2: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  signatory: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  signatoryPosition: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(300, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 300 })
  notes: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  endText3: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  endText4: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  baseCost: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  baseVendNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  user: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(12, {
    message: Message.MAX("$property", "$constraint1"),
  })
  month: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(9999, {
    message: Message.MAX("$property", "$constraint1"),
  })
  year: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(999, {
    message: Message.MAX("$property", "$constraint1"),
  })
  delegationNumber: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(99, {
    message: Message.MAX("$property", "$constraint1"),
  })
  phaseInmu: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(999, {
    message: Message.MAX("$property", "$constraint1"),
  })
  thirdId: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  notificationDate: Date | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  eventClosingDate: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(9999999999, {
    message: Message.MAX("$property", "$constraint1"),
  })
  tpsolavalId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 2 })
  vatApplies: string | null;
}
