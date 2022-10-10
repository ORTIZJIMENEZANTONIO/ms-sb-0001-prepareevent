import { ApiProperty } from "@nestjs/swagger";

export class ComerRejectedPropertyDto {
  idRejectedProperty: number;

  idEvent: string;

  noProperty: string;

  origin: string | null;

  description: string | null;

  status: string | null;

  cause: string | null;

  event: string | null;

  batchPublic: string | null;

  rejectedReason: string | null;

  batchOrigin: string | null;

}
