import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("comer_bienesxlote", { schema: "sera" })
export class ComerGoodsXLotEntity {
  @ApiProperty({ example: "No. bien por lote" })
  @Column({
    name: "id_bienxlote",
  })
  goodsLotId: number;

  @PrimaryColumn("numeric", { name: "no_bien", precision: 10, scale: 0 })
  goodsId: number;

  @PrimaryColumn("numeric", { name: "id_lote", precision: 10, scale: 0 })
  lotId: number;

  @Column("numeric", {
    name: "valor_base",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  baseValue: number | null;

  @Column("numeric", {
    name: "precio_avaluo_ref",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  valueReferential: number | null;

  @Column("numeric", {
    name: "precio_final",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  finalPrice: number | null;

  @Column("numeric", {
    name: "iva_base",
    nullable: true,
    precision: 13,
    scale: 2,
  })
  baseTax: number | null;

  @Column("numeric", {
    name: "iva_final",
    nullable: true,
    precision: 13,
    scale: 2,
    default: () => "0",
  })
  finalTax: number | null;

  @Column("numeric", {
    name: "porc_iva",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  taxPercent: number | null;

  @Column("character varying", { name: "campo1", nullable: true, length: 1250 })
  camp1: string | null;

  @Column("character varying", { name: "campo2", nullable: true, length: 50 })
  camp2: string | null;

  @Column("character varying", { name: "campo3", nullable: true, length: 75 })
  camp3: string | null;

  @Column("character varying", { name: "campo4", nullable: true, length: 50 })
  camp4: string | null;

  @Column("character varying", { name: "campo5", nullable: true, length: 50 })
  camp5: string | null;

  @Column("character varying", { name: "campo6", nullable: true, length: 50 })
  camp6: string | null;

  @Column("character varying", { name: "campo7", nullable: true, length: 50 })
  camp7: string | null;

  @Column("character varying", { name: "campo8", nullable: true, length: 500 })
  camp8: string | null;

  @Column("character varying", { name: "campo9", nullable: true, length: 50 })
  camp9: string | null;

  @Column("numeric", {
    name: "cantidad",
    nullable: true,
    precision: 19,
    scale: 3,
  })
  quantity: number | null;

  @Column("numeric", {
    name: "no_almacen",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  storeNo: number | null;

  @Column("character varying", {
    name: "cve_peritaje_jur",
    nullable: true,
    length: 30,
  })
  expertiseCve: string | null;

  @Column("character varying", {
    name: "empresa_valuadora",
    nullable: true,
    length: 60,
  })
  appraiserEnterprise: string | null;

  @Column("character varying", {
    name: "no_inventario",
    nullable: true,
    length: 50,
  })
  inventoryId: string | null;

  @Column("numeric", {
    name: "precio_sin_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  noTaxPrice: number;

  @Column("numeric", {
    name: "monto_app_iva",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  taxAppAmount: number | null;

  @Column("numeric", {
    name: "monto_noapp_iva",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "0",
  })
  taxAmountId: number | null;

  @Column("character varying", {
    name: "estatus_ant",
    nullable: true,
    length: 3,
  })
  antStatus: string | null;

  @Column({ type: Date, name: "fecha_avaluo", nullable: true })
  appraiserDate: Date | null;

  @Column("character varying", {
    name: "estatus_calc",
    nullable: true,
    length: 3,
  })
  calcStatus: string | null;

  @Column("numeric", {
    name: "precio_garantia",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  warrantyPrice: number | null;

  @Column("character varying", {
    name: "estatus_comer",
    nullable: true,
    length: 3,
  })
  eatStatus: string | null;

  @Column("numeric", {
    name: "no_transferente",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  transferenceId: number | null;

  @Column("numeric", {
    name: "anticipo",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  advance: number | null;

  @Column("numeric", {
    name: "pctslote",
    nullable: true,
    precision: 12,
    scale: 9,
  })
  lotPcts: number | null;

  @Column({ type: Date, name: "fecha_creacion", nullable: true })
  creationDate: Date | null;

  @Column("numeric", {
    name: "id_lote_comer",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  eatLotId: number | null;

  @Column("numeric", {
    name: "id_evento_comer",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  eatEventId: number | null;

  @Column("numeric", {
    name: "id_evento_remesa",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  consignmentEventId: number | null;

  @Column("numeric", {
    name: "id_lote_remesa",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  consignmentLotId: number | null;

  @Column("numeric", {
    name: "id_bienxlote_remesa",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  consignmentGoodsId: number | null;

  @Column("character varying", { name: "vendido", nullable: true, length: 1 })
  sold: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 4000,
  })
  observation: string | null;

  @Column("character varying", {
    name: "no_factura",
    nullable: true,
    length: 10,
  })
  billId: string | null;

  @Column("timestamp without time zone", {
    name: "fecha_factura",
    nullable: true,
  })
  billDate: Date | null;

  @Column("character varying", {
    name: "seleccionado",
    nullable: true,
    length: 1,
  })
  selected: string | null;

  @Column("character varying", { name: "anexo", nullable: true, length: 2 })
  annex: string | null;

  @Column("character varying", {
    name: "no_cilindros",
    nullable: true,
    length: 10,
  })
  cylindersId: string | null;

  @Column("character varying", {
    name: "procedencia",
    nullable: true,
    length: 30,
  })
  origin: string | null;

  @Column("character varying", {
    name: "pais_procedencia",
    nullable: true,
    length: 50,
  })
  originCountry: string | null;

  @Column("character varying", {
    name: "descripcion_lote",
    nullable: true,
    length: 255,
  })
  loteDescription: string | null;

  @Column("numeric", {
    name: "no_delegacionrem",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  delegationId: number | null;

  @Column("character varying", {
    name: "observaciones_2",
    nullable: true,
    length: 4000,
  })
  observations2: string | null;

  @Column("numeric", {
    name: "id_avaluo",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  appraisalId: number | null;

  @Column("character varying", { name: "a_iva", nullable: true, length: 2 })
  taxA: string | null;
}
