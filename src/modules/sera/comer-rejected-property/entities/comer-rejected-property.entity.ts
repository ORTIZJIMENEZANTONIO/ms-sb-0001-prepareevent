import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("comer_bienesrechazados", { schema: "sera" })
export class ComerRejectedPropertyEntity {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "id_bienrechazado",
  })
  id?: number | null;

  @Column("numeric", { name: "id_evento", precision: 7, scale: 0 })
  eventId: number;

  @Column("numeric", { name: "no_bien", precision: 10, scale: 0 })
  propertyNumber: number;

  @Column("character varying", { name: "origen", nullable: true, length: 15 })
  origin: string | null;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 1250,
  })
  description: string | null;

  @Column("character varying", { name: "estatus", nullable: true, length: 6 })
  status: string | null;

  @Column("character varying", { name: "causa", nullable: true, length: 4000 })
  cause: string | null;

  @Column("numeric", {
    name: "evento",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  event: number | null;

  @Column("numeric", {
    name: "lote_publico",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  batchPublic: number | null;

  @Column("numeric", {
    name: "rechazadopor",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  rejectedReason: number | null;

  @Column("numeric", {
    name: "lote_origen",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  batchOrigin: number | null;
}
