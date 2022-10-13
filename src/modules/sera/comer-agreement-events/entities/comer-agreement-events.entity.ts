import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
//import { ComerEventos } from "./ComerEventos";

//@Index("isia188p1_comer_con", ["idEvento", "noEventoConvocatoria"], {
//  unique: true,
//})
//@Index("isia188s1_comer_con", ["idEvento"], {})
//@Index("comer_conv_eventos_pkey", ["idEvento", "noEventoConvocatoria"], {
//  unique: true,
//})
@Entity("comer_conv_eventos", { schema: "sera" })
export class ComerConvEventEntity {
  @PrimaryColumn("numeric", {
    primary: true,
    name: "id_evento",
    precision: 7,
    scale: 0,
  })
  eventId: number;

  @Column("numeric", {
    primary: true,
    name: "no_evento_convocatoria",
    precision: 7,
    scale: 0,
  })
  noAnnouncementEvent: number;

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

  //@Column("character", { name: "trial339", nullable: true, length: 1 })
  //trial339: string | null;
//
  //@ManyToOne(
  //  () => ComerEventos,
  //  (comerEventos) => comerEventos.comerConvEventos
  //)
  //@JoinColumn([{ name: "id_evento", referencedColumnName: "idEvento" }])
  //idEvento2: ComerEventos;
}
