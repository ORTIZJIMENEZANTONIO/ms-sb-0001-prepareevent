import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
import { IsNullable } from "src/shared/custom-validators/custom-validator";
export class ComerLotsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @IsString()
  @MaxLength(4)
  @IsNotEmpty()
  statusVtaId: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  eventId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  publicLot: number;

  @IsString()
  @MaxLength(1250)
  @IsOptional()
  @IsNullable()
  description: string | null;

  @IsNumber()
  @IsNotEmpty()
  baseValue: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  transferenceNumber: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  customerId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  appraisalPriceRef: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  warrantyPrice: number | null;

  @IsDateString()
  @IsOptional()
  @IsNullable()
  deliveryDate: Date | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  finalPrice: number | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  @IsNullable()
  referenceG: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  @IsNullable()
  referential: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  accumulated: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  @IsNullable()
  systemValid: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  lotVat: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  amountAppVat: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  amountNoAppVat: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  vatAppPercentage: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  vatNoAppPercentage: number | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  @IsNullable()
  regCoordination: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  @IsNullable()@IsNullable()
  regCoordinator: string | null;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  @IsNullable()@IsNullable()
  fiscMandFact: string | null;
  
  @IsString()
  @MaxLength(250)
  @IsOptional()
  @IsNullable()
  ubication: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  advance: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  amountWithoutVat: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  notifyOfficeNumber: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  @IsNullable()
  notifyPrint: string | null;

  @IsString()
  @MaxLength(4)
  @IsOptional()
  @IsNullable()
  statusVtantId: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  goodsNumber: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  faultExceeds: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  @IsNullable()
  assignedEs: string | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  @IsNullable()
  scrapEs: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  @IsNullable()
  request: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  withheldAmount: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  delegationNumber: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  originLot: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  lotCover: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  palette: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  assignedWarranty: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  liqAmount: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  phase: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  partialitiesNumber: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  percentPoints: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNullable()
  advancePercent: number | null;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  @IsNullable()
  vatA: string | null;
}
