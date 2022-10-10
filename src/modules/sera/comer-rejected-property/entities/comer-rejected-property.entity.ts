import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
//import { ComerEventos } from "./ComerEventos";

//@Index("isia162p1_comer_bie", ["idBienrechazado"], { unique: true })
//@Index("comer_bienesrechazados_pkey", ["idBienrechazado"], { unique: true })
//@Index("isia162s1_comer_bie", ["idEvento"], {})
@Entity("comer_bienesrechazados", { schema: "sera" })
export class ComerRejectedPropertyEntity {
  @Column("numeric", {
    primary: true,
    name: "id_bienrechazado",
    precision: 10,
    scale: 0,
  })
  idRejectedProperty: number;

  @Column("numeric", { name: "id_evento", precision: 7, scale: 0 })
  idEvent: string;

  @Column("numeric", { name: "no_bien", precision: 10, scale: 0 })
  noProperty: string;

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
  event: string | null;

  @Column("numeric", {
    name: "lote_publico",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  batchPublic: string | null;

  @Column("numeric", {
    name: "rechazadopor",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  rejectedReason: string | null;

  @Column("numeric", {
    name: "lote_origen",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  batchOrigin: string | null;

  //@Column("character", { name: "trial709", nullable: true, length: 1 })
  //trial709: string | null;
//
  //@ManyToOne(
  //  () => ComerEventos,
  //  (comerEventos) => comerEventos.comerBienesrechazados
  //)
  //@JoinColumn([{ name: "id_evento", referencedColumnName: "idEvento" }])
  //idEvento2: ComerEventos;
}
