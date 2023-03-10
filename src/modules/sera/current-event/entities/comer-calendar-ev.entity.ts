import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
@Index("comer_calendarev_pk", ["id"], { unique: true })
@Entity("comer_calendarev", { schema: "sera" })
export class ComerCalendarevEntity {
  @Column("numeric", {
    primary: true,
    name: "id_calendar",
    precision: 10,
    scale: 0,
  })
  id: string;

  @Column("numeric", { name: "id_evento", precision: 7, scale: 0 })
  eventId: number;

  @Column("numeric", {
    name: "id_estatus",
    precision: 10,
    scale: 0,
  })
  statusId: string;

  @Column("numeric", {
    name: "dia",
    nullable: true,
    precision: 3,
    scale: 0,
    default: () => "1",
  })
  day: number | null;

  @Column("numeric", {
    name: "mes",
    nullable: true,
    precision: 3,
    scale: 0,
    default: () => "1",
  })
  month: number | null;

  @Column("numeric", {
    name: "anio",
    nullable: true,
    precision: 5,
    scale: 0,
    default: () => "2000",
  })
  year: number | null;

  @Column("numeric", {
    name: "rango_dias",
    nullable: true,
    precision: 3,
    scale: 0,
    default: () => "1",
  })
  daysRange: number | null;
}
