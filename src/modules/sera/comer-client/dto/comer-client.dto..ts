import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerClientDto {
  @IsNumber()
  clientId: number | null;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  reasonName: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  rfc: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  sellerId: number | null;

  @IsString()
  @MaxLength(8)
  @IsOptional()
  street: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  city: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  colony: string | null;

  @IsString()
  @MaxLength(49)
  @IsOptional()
  delegacion: string | null;

  @IsString()
  @MaxLength( 6)
  @IsOptional()
  cp: string | null;

  @IsString()
  @MaxLength(22)
  @IsOptional()
  country: string | null;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  fax: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  phone: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  mailWeb: string | null;

  @IsString()
  @MaxLength(31)
  @IsOptional()
  state: string | null;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  curp: string | null;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  blackList: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  paternalSurname: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  maternalSurname: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  muniId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  estaId: number | null;

  @IsDateString()
  @IsOptional()
  blackListDate: Date | null;

  @IsDateString()
  @IsOptional()
  releaseDate: Date | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  penaltyId: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  personType: string | null;

  @IsString()
  @MaxLength(15)
  @IsOptional()
  approvedRfc: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  userFree: string | null;

  @IsDateString()
  @IsOptional()
  freeDate: Date | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  registerId: number | null;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  economicActCve: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  identificationType: number | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  identificationNumber: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  agentId: number | null;

  @IsString()
  @MaxLength(40)
  @IsOptional()
  outsideNo: string | null;

  @IsString()
  @MaxLength(40)
  @IsOptional()
  insisdeNo: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  password: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  user: string | null;

  @IsString()
  @MaxLength(18)
  @IsOptional()
  interbankKey: string | null;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  bank: string | null;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  branch: string | null;

  @IsString()
  @MaxLength(11)
  @IsOptional()
  checksAccount: string | null;

  @IsDateString()
  @IsOptional()
  penaltyInDate: Date | null;

  @IsDateString()
  @IsOptional()
  penaltyOutDate: Date | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  penalizeUser: string | null;
}
