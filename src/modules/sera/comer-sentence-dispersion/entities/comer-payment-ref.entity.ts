import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

@Entity("comer_pagoref", { schema: "sera" })
export class ComerPagoref {
  @PrimaryColumn("numeric", {
    name: "id_pago",
    precision: 10,
    scale: 0,
  })
  idPago: string;

  @Column("character varying", {
    primary: true,
    name: "referencia",
    length: 30,
  })
  referencia: string;

  @Column("numeric", {
    primary: true,
    name: "no_movimiento",
    precision: 10,
    scale: 0,
  })
  noMovimiento: string;

  @Column("date", { primary: true, name: "fecha" })
  fecha: string;

  @Column("numeric", { name: "monto", precision: 15, scale: 2 })
  monto: string;

  @Column("character varying", { primary: true, name: "cve_banco", length: 10 })
  cveBanco: string;

  @Column("numeric", { name: "codigo", nullable: true, precision: 4, scale: 0 })
  codigo: string | null;

  @Column("numeric", {
    name: "id_lote",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idLote: string | null;

  @Column("character varying", {
    name: "valido_sistema",
    nullable: true,
    length: 1,
  })
  validoSistema: string | null;

  @Column("character varying", {
    name: "noentiempo",
    nullable: true,
    length: 1,
  })
  noentiempo: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  descripcion: string | null;

  @Column("character varying", { name: "tipo", nullable: true, length: 1 })
  tipo: string | null;

  @Column("numeric", {
    name: "idordeningreso",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idordeningreso: string | null;

  @Column("character varying", {
    name: "resultado",
    nullable: true,
    length: 200,
  })
  resultado: string | null;

  @Column("numeric", {
    name: "sucursal",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  sucursal: string | null;

  @Column("numeric", {
    name: "id_pagodevuelve",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idPagodevuelve: string | null;

  @Column("character varying", {
    name: "conciliado",
    nullable: true,
    length: 1,
  })
  conciliado: string | null;

  @Column("date", { name: "fecha_registro", nullable: true })
  fechaRegistro: string | null;

  @Column("character varying", {
    name: "referenciaori",
    nullable: true,
    length: 30,
  })
  referenciaori: string | null;

  @Column("character varying", { name: "cuenta", nullable: true, length: 20 })
  cuenta: string | null;

  @Column("date", { name: "fecha_oi", nullable: true })
  fechaOi: string | null;

  @Column("character varying", { name: "aplicadoa", nullable: true, length: 2 })
  aplicadoa: string | null;

  @Column("numeric", {
    name: "id_cliente",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idCliente: string | null;

  @Column("numeric", {
    name: "folio_oi",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  folioOi: string | null;

  @Column("numeric", {
    name: "indicador",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  indicador: string | null;

  @Column("numeric", {
    name: "codigo_edo_cta",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  codigoEdoCta: string | null;

  @Column("date", { name: "fecha_afectacion", nullable: true })
  fechaAfectacion: string | null;

  @Column("numeric", { name: "no_registro", nullable: true })
  noRegistro: string | null;

  @Column("numeric", {
    name: "id_tipo_sat",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  idTipoSat: string | null;

  @Column("numeric", {
    name: "id_gasto",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idGasto: string | null;

  @Column("numeric", {
    name: "id_solicitudpago",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  idSolicitudpago: string | null;

}
