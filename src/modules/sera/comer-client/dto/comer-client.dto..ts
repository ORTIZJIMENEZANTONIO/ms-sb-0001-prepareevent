import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
import { Message } from "src/shared/validation-messages/message";

export class ComerClientDto {
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
  @MaxLength(100, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: true, maxLength: 100 })
  reasonName: string;

  @Type(() => String)
  @IsNotEmpty({
    message: Message.REQUIRED("$property"),
  })
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(20, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: true, maxLength: 20 })
  rfc: string;

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
  sellerId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(80, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 80 })
  street: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  city: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  colony: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(40, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 40 })
  delegacion: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(6, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 6 })
  zipCode: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(22, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 22 })
  country: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(20, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 20 })
  fax: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  phone: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  mailWeb: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(31, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 20 })
  state: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(20, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 20 })
  curp: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(2, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 2 })
  blackList: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  paternalSurname: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(60, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 60 })
  maternalSurname: string | null;

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
  muniId: number | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
   @IsPositive({
    message: Message.POSITIVE('$property'),
  })
  @ApiProperty({ example: null, required: false })
  estaId: number | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  blackListDate: Date | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  releaseDate: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
  @IsPositive({
    message: Message.POSITIVE("$property")
  })
  @ApiProperty({ example: null, required: false })
  penaltyId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(1, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 1 })
  personType: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(15, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 15 })
  approvedRfc: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  userFree: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  freeDate: Date | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
   @IsPositive({
    message: Message.POSITIVE('$property'),
  })
  @ApiProperty({ example: null, required: false })
  registerId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(20, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 20 })
  economicAgreementKey: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
   @IsPositive({
    message: Message.POSITIVE('$property'),
  })
  @ApiProperty({ example: null, required: false })
  identificationType: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  identificationNumber: string | null;

  @Type(() => Number)
  @IsOptional()
  @IsNumber(
    {},
    {
      message: Message.NUMBER("$property"),
    }
  )
   @IsPositive({
    message: Message.POSITIVE('$property'),
  })
  @ApiProperty({ example: null, required: false })
  agentId: number | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(40, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 40 })
  outsideNumber: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(40, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 40 })
  @IsString()
  @MaxLength(40)
  @IsOptional()
  insisdeNumber: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  password: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(50, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 50 })
  user: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(10, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 10 })
  interbankKey: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(3, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 3 })
  bank: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(10, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 10 })
  branch: string | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(11, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 11 })
  checksAccount: string | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  penaltyInitDate: Date | null;

  @Type(() => Date)
  @IsOptional()
  @IsDate({
    message: Message.IsDate("$property"),
  })
  @ApiProperty({ example: null, required: false })
  penaltyEndDate: Date | null;

  @Type(() => String)
  @IsOptional()
  @IsString({
    message: Message.STRING("$property"),
  })
  @MaxLength(30, {
    message: Message.MAX_LENGTH("$property", "$constraint1"),
  })
  @ApiProperty({ example: null, required: false, maxLength: 30 })
  penalizeUser: string | null;
}
