import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
@Entity("comer_conv_eventos", { schema: "sera" })
export class ComerConvEventEntity {
  @PrimaryColumn("numeric", {
    primary: true,
    name: "id_evento",
    precision: 7,
    scale: 0,
  })
  eventId: number;

  @PrimaryColumn("numeric", {
    primary: true,
    name: "no_evento_convocatoria",
    precision: 7,
    scale: 0,
  })
  announcementEventId: number;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "fechas", nullable: true, length: 70 })
  dates: string | null;

  @Column("character varying", { name: "horario", nullable: true, length: 70 })
  schedule: string | null;

  @Column("character varying", { name: "lugar", nullable: true, length: 200 })
  place: string | null;

  @Column("character varying", {
    name: "restriccion",
    nullable: true,
    length: 500,
  })
  restriction: string | null;
}
