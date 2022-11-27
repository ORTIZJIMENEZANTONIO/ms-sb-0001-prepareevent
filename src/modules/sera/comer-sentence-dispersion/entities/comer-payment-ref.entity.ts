import {
  Column,
  Entity,
  PrimaryColumn,
} from "typeorm";

@Entity("comer_pagoref", { schema: "sera" })
export class ComerPagoref {
  @PrimaryColumn("numeric", {
    name: "id_pago",
    precision: 10,
    scale: 0,
  })
  id: number;

  @PrimaryColumn("character varying", {
    name: "referencia",
    length: 30,
  })
  reference: string;

  @PrimaryColumn("numeric", {
    name: "no_movimiento",
    precision: 10,
    scale: 0,
  })
  movementNumber: string;

  @Column("date", { primary: true, name: "fecha" })
  date: Date;

  @Column("numeric", { name: "monto", precision: 15, scale: 2 })
  amount: number;

  @Column("character varying", { primary: true, name: "cve_banco", length: 10 })
  bankKey: string;

  @Column("numeric", { name: "codigo", nullable: true, precision: 4, scale: 0 })
  code: number| null;

  @Column("numeric", {
    name: "id_lote",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  lotId: number | null;

  @Column("character varying", {
    name: "valido_sistema",
    nullable: true,
    length: 1,
  })
  validSystem: string | null;

  @Column("character varying", {
    name: "noentiempo",
    nullable: true,
    length: 1,
  })
  noenTime: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "tipo", nullable: true, length: 1 })
  type: string | null;

  @Column("numeric", {
    name: "idordeningreso",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  orderIngressId: number | null;

  @Column("character varying", {
    name: "resultado",
    nullable: true,
    length: 200,
  })
  result: string | null;

  @Column("numeric", {
    name: "sucursal",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  branchOffice: number | null;

  @Column("numeric", {
    name: "id_pagodevuelve",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  paymentReturnId: number | null;

  @Column("character varying", {
    name: "conciliado",
    nullable: true,
    length: 1,
  })
  reconciled: string | null;

  @Column("date", { name: "fecha_registro", nullable: true })
  registryDate: Date | null;

  @Column("character varying", {
    name: "referenciaori",
    nullable: true,
    length: 30,
  })
  urlReference: string | null;

  @Column("character varying", { name: "cuenta", nullable: true, length: 20 })
  account: string | null;

  @Column("date", { name: "fecha_oi", nullable: true })
  oiDate: Date | null;

  @Column("character varying", { name: "aplicadoa", nullable: true, length: 2 })
  applyTo: string | null;

  @Column("numeric", {
    name: "id_cliente",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  clientId: number | null;

  @Column("numeric", {
    name: "folio_oi",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  oiFolio: number | null;

  @Column("numeric", {
    name: "indicador",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  indicator: number | null;

  @Column("numeric", {
    name: "codigo_edo_cta",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  codeStateCta: number | null;

  @Column("date", { name: "fecha_afectacion", nullable: true })
  affectationDate: Date | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  registerNumber: number | null;

  @Column("numeric", {
    name: "id_tipo_sat",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  typeSatId: number | null;

  @Column("numeric", {
    name: "id_gasto",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  spentId: number | null;

  @Column("numeric", {
    name: "id_solicitudpago",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  paymentRequestId: number | null;

}
