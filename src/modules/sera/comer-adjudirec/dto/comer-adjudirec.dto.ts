import { ApiProperty } from "@nestjs/swagger";

export class ComerAdjudirecDto {

  @ApiProperty({ example: "ex" })
  idEvent: string;

  committee: string | null;

  sessionDate: string | null;

  noSession: string | null;

  creationUser: string | null;

  userWhoProposed: string | null;

  userWhoFormulated: string | null;

  physicalCondition: string | null;

  observation: string | null;

  valudi: string | null;

  amountDis: string | null;

  tendered: string | null;

  udiDate: string | null;

  wayToPay: string | null;

  text1: string | null;

  text2: string | null;

  text3: string | null;

  receptionDate: string | null;

  bookValue: string | null;

  valMaxUdi: string | null;

  cause: string | null;
}
