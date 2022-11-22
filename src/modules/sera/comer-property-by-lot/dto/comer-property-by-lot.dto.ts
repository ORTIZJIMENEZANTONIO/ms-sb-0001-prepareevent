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
  MAX,
  MaxLength,
} from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class ComerGoodsXLotDto {
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
  propertyByLotId: number;

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
  goodNumber: number;

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
  lotId: number;

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
  baseValue: number | null;

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
  @ApiProperty({ example: null, required: false })
  finalPrice: number | null;

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
  baseVat: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @ApiProperty({ example: null, required: false })
  finalVat: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @Max(99, {
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: null, required: false })
  vatPercent: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1250, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1250 })
  camp1: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp2: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(75, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 75 })
  camp3: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp4: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp5: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp6: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp7: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(500, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 500 })
  camp8: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  camp9: string | null;

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
  quantity: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @Max(999999, {
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 5 })
  storeNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  surveyJurKey: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  appraiserCompany: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  inventoryNumber: string | null;

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
  priceWithoutVat: number;

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
  @ApiProperty({ example: null, required: false })
  amountNoAppVat: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(3, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 3 })
  previousStatus: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  appraiserDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(3, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 3 })
  calcStatus: string | null;

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
  warrantyPrice: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(3, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 3 })
  status: string | null;

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
  @Max(99999, {
    message: Message.MAX_NUMBER("$property", "$constrain1"),
  })
  @ApiProperty({ example: null, required: false })
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
  @ApiProperty({ example: null, required: false })
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
  @ApiProperty({ example: null, required: false })
  lotPcts: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  creationDate: Date | null;

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
  comerLotId: number | null;

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
  comerEventId: number | null;

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
  consignmentEventId: number | null;

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
  consignmentLotId: number | null;

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
  consignmentGoodsId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  sold: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  observation: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(10, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 10 })
  billNumber: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  billDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  selected: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 2 })
  annex: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(10, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 10 })
  cylindersNumber: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  origin: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  originCountry: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(255, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 255 })
  lotDescription: string | null;

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
  @ApiProperty({ example: null, required: false })
  delegationNumber: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(4000, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 4000 })
  observations2: string | null;

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
  appraisalId: number | null;

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
