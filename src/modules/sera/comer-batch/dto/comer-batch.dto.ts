import { ApiProperty } from "@nestjs/swagger";

export class ComerBatchEntity {
  
  lotId: number;

  idEstatusvta: string;

  eventId: number;

  publicLot: number;

  description: string | null;

  valorBase: string;

  noTransferente: string | null;

  clientId: string | null;

  precioAvaluoRef: string | null;

  precioGarantia: string | null;

  fechaEntrega: Date | null;

  precioFinal: string | null;

  referenciag: string | null;

  referencial: string | null;

  acumulado: string | null;

  validoSistema: string | null;

  ivaLote: string | null;

  montoAppIva: string | null;

  montoNoappIva: string | null;

  porcAppIva: string | null;

  porcNoappIva: string | null;

  coordinacionReg: string | null;

  coordinadorReg: string | null;

  datoFiscMand: string | null;

  ubicacion: string | null;

  anticipo: string | null;

  montoSinIva: string | null;

  nooficionotifica: string | null;

  imprimenotifica: string | null;

  idestatusvtant: string | null;

  numBienes: string | null;

  excedeFalta: string | null;

  esasignado: string | null;

  eschatarra: string | null;

  solicita: string | null;

  montoRetenido: string | null;

  noDelegacion: string | null;

  loteOrigen: string | null;

  cubrelotes: number | null;

  paleta: string | null;

  garantiaAsig: number | null;

  montoLiq: number | null;

  fase: string | null;

  noParcialidades: string | null;

  puntosPorcen: string | null;

  porcAnticipo: string | null;

  aIva: string | null;

}