import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
//import { ComerEventos } from "./ComerEventos";
//
//@Index("comer_adjudirec_pkey", ["idEvento"], { unique: true })
//@Index("isia154p1_comer_adj", ["idEvento"], { unique: true })
@Entity("comer_adjudirec", { schema: "sera" })
export class ComerAdjudirecEntity {
  @Column("numeric", {
    primary: true,
    name: "id_evento",
    precision: 7,
    scale: 0,
  })
  idEvent: string;

  @Column("character varying", { name: "comite", nullable: true, length: 1 })
  committee: string | null;

  @Column("date", { name: "fec_sesion", nullable: true })
  sessionDate: string | null;

  @Column("character varying", {
    name: "no_sesion",
    nullable: true,
    length: 30,
  })
  noSession: string | null;

  @Column("character varying", {
    name: "usr_elabora",
    nullable: true,
    length: 30,
  })
  creationUser: string | null;

  @Column("character varying", {
    name: "usr_propone",
    nullable: true,
    length: 30,
  })
  userWhoProposed: string | null;

  @Column("character varying", {
    name: "usr_formula",
    nullable: true,
    length: 30,
  })
  userWhoFormulated: string | null;

  @Column("character varying", {
    name: "cond_fisica",
    nullable: true,
    length: 100,
  })
  physicalCondition: string | null;

  @Column("character varying", {
    name: "observaciones",
    nullable: true,
    length: 250,
  })
  observation: string | null;

  @Column("numeric", { name: "valudi", nullable: true, precision: 6, scale: 3 })
  valudi: string | null;

  @Column("numeric", {
    name: "montoudis",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amountDis: string | null;

  @Column("character varying", { name: "licitado", nullable: true, length: 2 })
  tendered: string | null;

  @Column("date", { name: "fechaudi", nullable: true })
  udiDate: string | null;

  @Column("character varying", {
    name: "formapago",
    nullable: true,
    length: 50,
  })
  wayToPay: string | null;

  @Column("character varying", { name: "texto1", nullable: true, length: 800 })
  text1: string | null;

  @Column("character varying", { name: "texto2", nullable: true, length: 100 })
  text2: string | null;

  @Column("character varying", { name: "texto3", nullable: true, length: 1500 })
  text3: string | null;

  @Column("character varying", {
    name: "fec_recep",
    nullable: true,
    length: 30,
  })
  receptionDate: string | null;

  @Column("character varying", {
    name: "val_libros",
    nullable: true,
    length: 50,
  })
  bookValue: string | null;

  @Column("numeric", {
    name: "valmaxudi",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  valMaxUdi: string | null;

  @Column("character varying", { name: "causa", nullable: true, length: 100 })
  cause: string | null;

  //@Column("character", { name: "trial455", nullable: true, length: 1 })
  //trial455: string | null;
//
  //@OneToOne(() => ComerEventos, (comerEventos) => comerEventos.comerAdjudirec)
  //@JoinColumn([{ name: "id_evento", referencedColumnName: "idEvento" }])
  //idEvento2: ComerEventos;
}
