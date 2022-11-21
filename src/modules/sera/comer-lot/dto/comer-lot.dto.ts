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
export class ComerLotDto {
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
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: true, maxLength: 4 })
  statusVtaId: string;

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
  @Max(9999999, {
    message: Message.MAX_NUMBER("$property", "$constraint1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
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
  @IsPositive({
    message: Message.POSITIVE("$property"),
  })
  @Max(99999999, {
    message: Message.MAX_NUMBER("$property", "$constraint1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 8 })
  publicLot: number;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1250, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1250 })
  description: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 33 })
  baseValue: number;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  transferenceNumber: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  customerId: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  appraisalPriceRef: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  warrantyPrice: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  deliveryDate: Date | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  finalPrice: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  referenceG: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  referential: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  accumulated: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  systemValid: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  lotVat: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  amountAppVat: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  amountNoAppVat: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  vatAppPercentage: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 9 })
  vatNoAppPercentage: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  regCoordination: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  regCoordinator: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(200, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 200 })
  fiscMandFact: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(250, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 250 })
  ubication: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  advance: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  amountWithoutVat: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  notifyOfficeNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  notifyPrint: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4 })
  statusVtantId: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  goodsNumber: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  faultExceeds: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  assignedEs: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  scrapEs: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  request: string | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  withheldAmount: number | null;

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
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 2 })
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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  originLot: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  lotCover: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  palette: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  assignedWarranty: number | null;

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
  @ApiProperty({ example: 1, required: true, maxLength: 7 })
  liqAmount: number | null;

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
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 2 })
  phase: number | null;

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
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 2 })
  partialitiesNumber: number | null;

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
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 4 })
  percentPoints: number | null;

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
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: 1, required: true, maxLength: 3 })
  advancePercent: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 2 })
  vatA: string | null;
}
