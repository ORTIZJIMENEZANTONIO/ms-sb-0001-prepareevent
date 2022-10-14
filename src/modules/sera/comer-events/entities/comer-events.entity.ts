import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
// autoincrement
@Entity("comer_eventos", { schema: "sera" })
export class ComerEventEntity {
  @ApiProperty({ example: "No. Evento" })
  @PrimaryGeneratedColumn({
    name: "id_evento",
  })
  eventId: number;

  @Column("numeric", { name: "id_tpevento", precision: 2, scale: 0 })
  eventTpId: number;

  @Column("character varying", { name: "id_estatusvta", length: 4 })
  statusVtaId: string;

  @Column("character varying", {
    name: "cve_proceso",
    nullable: true,
    length: 60,
  })
  processCve: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 300,
  })
  observations: string | null;

  @Column("character varying", { name: "direccion", nullable: true, length: 1 })
  address: string | null;

  @Column("date", { name: "fec_fallo", nullable: true })
  failureDate: Date | null;

  @Column("character varying", { name: "lugar", nullable: true, length: 100 })
  place: string | null;

  @Column("date", { name: "fec_evento", nullable: true })
  eventDate: Date | null;

  @Column("character varying", { name: "texto1", nullable: true, length: 4000 })
  texto1: string | null;

  @Column("character varying", { name: "texto2", nullable: true, length: 4000 })
  texto2: string | null;

  @Column("character varying", { name: "firmante", nullable: true, length: 50 })
  firmante: string | null;

  @Column("character varying", {
    name: "firmante_cargo",
    nullable: true,
    length: 50,
  })
  firmanteCargo: string | null;

  @Column("character varying", { name: "notas", nullable: true, length: 300 })
  notes: string | null;

  @Column("character varying", {
    name: "textofin3",
    nullable: true,
    length: 4000,
  })
  textofin3: string | null;

  @Column("character varying", {
    name: "textofin4",
    nullable: true,
    length: 4000,
  })
  textofin4: string | null;

  @Column("numeric", {
    name: "costo_base",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  baseCost: number | null;

  @Column("numeric", {
    name: "num_base_vend",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  numBaseVend: number | null;

  @Column("character varying", { name: "usuario", nullable: true, length: 30 })
  user: string | null;

  @Column("numeric", { name: "mes", nullable: true, precision: 2, scale: 0 })
  month: number | null;

  @Column("numeric", { name: "anio", nullable: true, precision: 4, scale: 0 })
  year: number | null;

  @Column("numeric", {
    name: "no_delegacion",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  delegationId: number | null;

  @Column("numeric", {
    name: "fase_inmu",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  faseInmu: number | null;

  @Column("numeric", {
    name: "id_tercerocomer",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  thirdId: number | null;

  @Column("date", { name: "fecha_notificacion", nullable: true })
  fechaNotificacion: Date | null;

  @Column("date", { name: "fecha_cierre_evento", nullable: true })
  eventClosingDate: Date | null;

  @Column("numeric", {
    name: "id_tpsolaval",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tpsolavalId: number | null;

  @Column("character varying", {
    name: "aplica_iva",
    nullable: true,
    length: 2,
    default: () => "'2'",
  })
  ivaApplies: string | null;
}
