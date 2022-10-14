import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";

export class ComerEventDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  eventId: number;

  eventTpId: number;

  statusVtaId: string;

  processCve: string | null;

  observations: string | null;

  address: string | null;

  failureDate: string | null;

  place: string | null;

  eventDate: string | null;

  texto1: string | null;

  texto2: string | null;

  firmante: string | null;

  firmanteCargo: string | null;

  notes: string | null;

  textofin3: string | null;

  textofin4: string | null;

  baseCost: number | null;

  numBaseVend: number | null;

  user: string | null;

  month: number | null;

  year: number | null;

  delegationId: number | null;

  faseInmu: number | null;

  thirdId: number | null;

  fechaNotificacion: string | null;

  eventClosingDate: string | null;

  tpsolavalId: number | null;

  ivaApplies: string | null;
}
