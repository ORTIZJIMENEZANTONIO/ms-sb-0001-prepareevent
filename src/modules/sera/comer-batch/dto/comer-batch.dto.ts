import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
export class ComerLotsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  lotId: number;

  @IsString()
  @MaxLength(4)
  @IsNotEmpty()
  statusId: string;

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
  description: string | null;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  baseValue: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  transferenceId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  customerId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  refAppraisalPrice: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  warrantyPrice: number | null;

  @IsDateString()
  @IsOptional()
  deliveryDate: Date | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  finalPrice: number | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  agReference: string | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  referential: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  accumulated: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  systemValid: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  lotTax: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  appTaxAmount: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  appTaxAmountId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  porcAppTax: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  porcAppTaxId: number | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  regCoordination: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  regCoordinator: string | null;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  FiscMandFact: string | null;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  ubication: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  advance: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  amountWithoutTax: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  notifyOfficeId: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  notifyPrint: string | null;

  @IsString()
  @MaxLength(4)
  @IsOptional()
  statusVtantId: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  goodsNumber: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  faultExceeds: number | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  assignedEs: string | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  scrapEs: string | null;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  request: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  withheldAmount: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  delegationId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  originLot: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  lotCover: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  palette: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  assignedWarranty: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  liqAmount: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  phase: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  partialitiesId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  percentPoints: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  advancePercent: number | null;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  taxA: string | null;
}
