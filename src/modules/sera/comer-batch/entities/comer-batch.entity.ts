import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
// import { ComerEstatusvta } from "./ComerEstatusvta";
// import { ComerEventos } from "./ComerEventos";

// @Index("idx$$_da800001", ["idEstatusvta", "idEvento", "lotId"], {})
// @Index("comer_lotes_pkey", ["idLote"], { unique: true })
@Entity("comer_lotes", { schema: "sera" })
export class ComerLotsEntity {
  @PrimaryGeneratedColumn( {
    name: "id_lote"
  })
  lotId: number;

  @Column("character varying", { name: "id_estatusvta", length: 4 })
  statusId: string;

  @Column("numeric", { name: "id_evento", precision: 7, scale: 0 })
  eventId: number;

  @Column("numeric", { name: "lote_publico", precision: 8, scale: 0 })
  publicLot: number;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 1250,
  })
  description: string | null;

  @Column("numeric", { name: "valor_base", precision: 33, scale: 2 })
  baseValue: number;

  @Column("numeric", {
    name: "no_transferente",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  transferenceId: number | null;

  @Column("numeric", {
    name: "id_cliente",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  customerId: number | null;

  @Column("numeric", {
    name: "precio_avaluo_ref",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  refAppraisalPrice: number | null;

  @Column("numeric", {
    name: "precio_garantia",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  warrantyPrice: number | null;

  @Column("timestamp without time zone", {
    name: "fecha_entrega",
    nullable: true,
  })
  deliveryDate: Date | null;

  @Column("numeric", {
    name: "precio_final",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  finalPrice: number | null;

  @Column("character varying", {
    name: "referenciag",
    nullable: true,
    length: 30,
  })
  agReference: string | null;

  @Column("character varying", {
    name: "referencial",
    nullable: true,
    length: 30,
  })
  referential: string | null;

  @Column("numeric", {
    name: "acumulado",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "0",
  })
  accumulated: number | null;

  @Column("character varying", {
    name: "valido_sistema",
    nullable: true,
    length: 1,
  })
  systemValid: string | null;

  @Column("numeric", {
    name: "iva_lote",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  lotTax: number | null;

  @Column("numeric", {
    name: "monto_app_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  appTaxAmount: number | null;

  @Column("numeric", {
    name: "monto_noapp_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  appTaxAmountId: number | null;

  @Column("numeric", {
    name: "porc_app_iva",
    nullable: true,
    precision: 12,
    scale: 9,
  })
  porcAppTax: number | null;

  @Column("numeric", {
    name: "porc_noapp_iva",
    nullable: true,
    precision: 12,
    scale: 9,
  })
  porcAppTaxId: number | null;

  @Column("character varying", {
    name: "coordinacion_reg",
    nullable: true,
    length: 50,
  })
  regCoordination: string | null;

  @Column("character varying", {
    name: "coordinador_reg",
    nullable: true,
    length: 50,
  })
  regCoordinator: string | null;

  @Column("character varying", {
    name: "dato_fisc_mand",
    nullable: true,
    length: 200,
  })
  FiscMandFact: string | null;

  @Column("character varying", {
    name: "ubicacion",
    nullable: true,
    length: 250,
  })
  ubication: string | null;

  @Column("numeric", {
    name: "anticipo",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  advance: number | null;

  @Column("numeric", {
    name: "monto_sin_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amountWithoutTax: number | null;

  @Column("numeric", {
    name: "nooficionotifica",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  notifyOfficeId: number | null;

  @Column("character varying", {
    name: "imprimenotifica",
    nullable: true,
    length: 1,
  })
  notifyPrint: string | null;

  @Column("character varying", {
    name: "idestatusvtant",
    nullable: true,
    length: 4,
  })
  statusVtantId: string | null;

  @Column("numeric", {
    name: "num_bienes",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  goodsNumber: number | null;

  @Column("numeric", {
    name: "excede_falta",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  faultExceeds: number | null;

  @Column("character varying", {
    name: "esasignado",
    nullable: true,
    length: 1,
  })
  assignedEs: string | null;

  @Column("character varying", {
    name: "eschatarra",
    nullable: true,
    length: 1,
  })
  scrapEs: string | null;

  @Column("character varying", { name: "solicita", nullable: true, length: 60 })
  request: string | null;

  @Column("numeric", {
    name: "monto_retenido",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  withheldAmount: number | null;

  @Column("numeric", {
    name: "no_delegacion",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  delegationId: number | null;

  @Column("numeric", {
    name: "lote_origen",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  originLot: number | null;

  @Column("double precision", {
    name: "cubrelotes",
    nullable: true,
    precision: 53,
  })
  lotCover: number | null;

  @Column("numeric", {
    name: "paleta",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  palette: number | null;

  @Column("double precision", {
    name: "garantia_asig",
    nullable: true,
    precision: 53,
  })
  assignedWarranty: number | null;

  @Column("double precision", {
    name: "monto_liq",
    nullable: true,
    precision: 53,
  })
  liqAmount: number | null;

  @Column("numeric", { name: "fase", nullable: true, precision: 2, scale: 0 })
  phase: number | null;

  @Column("numeric", {
    name: "no_parcialidades",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  partialitiesId: number | null;

  @Column("numeric", {
    name: "puntos_porcen",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  percentPoints: number | null;

  @Column("numeric", {
    name: "porc_anticipo",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  advancePercent: number | null;

  @Column("character varying", { name: "a_iva", nullable: true, length: 2 })
  taxA: string | null;

  // @Column("character", { name: "trial058", nullable: true, length: 1 })
  // trial058: string | null;
  //
  // @ManyToOne(
  //     () => ComerEstatusvta,
  //     (comerEstatusvta) => comerEstatusvta.comerLotes
  // )
  // @JoinColumn([{ name: "id_estatusvta", referencedColumnName: "idEstatusvta" }])
  // idEstatusvta2: ComerEstatusvta;
  //
  // @ManyToOne(() => ComerEventos, (comerEventos) => comerEventos.comerLotes)
  // @JoinColumn([{ name: "id_evento", referencedColumnName: "idEvento" }])
  // idEvento2: ComerEventos;
}