import { ApiProperty } from "@nestjs/swagger";

export class ComerClientDto {
  @ApiProperty({ example: "No. Cliente" })
  clientId: number;

  reasonName: string;

  rfc: string;

  sellerId: number | null;

  street: string | null;

  city: string | null;

  colony: string | null;

  delegacion: string | null;

  cp: string | null;

  country: string | null;

  fax: string | null;

  phone: string | null;

  mailWeb: string | null;

  state: string | null;

  curp: string | null;

  blackList: string | null;

  paternalSurname: string | null;

  maternalSurname: string | null;

  muniId: number | null;

  estaId: number | null;

  blackListDate: Date | null;

  releaseDate: Date | null;

  penaltyId: number | null;

  personType: string | null;

  approvedRfc: string | null;

  userFree: string | null;

  freeDate: Date | null;

  registerId: number | null;

  economicActCve: string | null;

  identificationType: number | null;

  identificationNumber: string | null;

  agentId: number | null;

  outsideNo: string | null;

  insisdeNo: string | null;

  password: string | null;

  user: string | null;

  interbankKey: string | null;

  bank: string | null;

  branch: string | null;

  checksAccount: string | null;

  penaltyInDate: Date | null;

  penaltyOutDate: Date | null;

  penalizeUser: string | null;
}
