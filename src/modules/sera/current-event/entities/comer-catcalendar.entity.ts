import { Column, Entity, Index, OneToMany } from "typeorm";

//@Index("comer_catcalendar_pkey", ["idEstatus"], { unique: true })
//@Index("isia170p1_comer_cat", ["idEstatus"], { unique: true })
@Entity("comer_catcalendar", { schema: "sera" })
export class ComerCatCalendarEntity {
  @Column("numeric", {
    primary: true,
    name: "id_estatus",
    precision: 10,
    scale: 0,
  })
  id: number;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
    default: () => "'S_DESC'",
  })
  description: string | null;

  @Column("character varying", {
    name: "color",
    nullable: true,
    length: 25,
    default: () => "'#FFFFFF'",
  })
  color: string | null;

  @Column("character varying", {
    name: "activo",
    length: 1,
    default: () => "'N'",
  })
  active: string;
}
