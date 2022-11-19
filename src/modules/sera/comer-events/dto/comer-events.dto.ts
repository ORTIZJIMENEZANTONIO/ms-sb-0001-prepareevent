import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerEventDto {
  // pk auto
  @IsNumber()
  @IsPositive()
  @IsOptional()
  id: number | null;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  eventTpId: number;

  @IsString()
  @MaxLength(4)
  @IsNotEmpty()
  statusVtaId: string;

  @IsString()
  @MaxLength(60)
  @IsOptional()
  processCve: string | null;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  observations: string | null;

  @IsString()
  @MaxLength(1)
  @IsOptional()
  address: string | null;

  @IsString()
  @IsOptional()
  failureDate: Date | null;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  place: string | null;

  @IsString()
  @IsOptional()
  eventDate: Date | null;

  @IsString()
  @MaxLength(4000)
  @IsOptional()
  texto1: string | null;

  @IsString()
  @MaxLength(4000)
  @IsOptional()
  texto2: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  firmante: string | null;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  firmanteCargo: string | null;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  notes: string | null;

  @IsString()
  @MaxLength(4000)
  @IsOptional()
  textofin3: string | null;

  @IsString()
  @MaxLength(4000)
  @IsOptional()
  textofin4: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  baseCost: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  numBaseVend: number | null;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  user: string | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  month: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  year: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  delegationId: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  faseInmu: number | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  thirdId: number | null;

  @IsString()
  @IsOptional()
  fechaNotificacion: Date | null;

  @IsString()
  @IsOptional()
  eventClosingDate: Date | null;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  tpsolavalId: number | null;

  @IsString()
  @MaxLength(2)
  @IsOptional()
  ivaApplies: string | null;
}
