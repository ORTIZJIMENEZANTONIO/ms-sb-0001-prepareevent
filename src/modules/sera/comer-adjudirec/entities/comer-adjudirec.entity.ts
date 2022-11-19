import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("comer_adjudirec", { schema: "sera" })
export class ComerAdjudirecEntity {
  @PrimaryGeneratedColumn({
    type: "numeric",
    name: "id_evento",
  })
  id: number;

  @Column("character varying", { name: "comite", nullable: true, length: 1 })
  committee: string | null;

  @Column("date", { name: "fec_sesion", nullable: true })
  sessionDate: Date | null;

  @Column("character varying", {
    name: "no_sesion",
    nullable: true,
    length: 30,
  })
  sessionNumber;

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
  valudi: number | null;

  @Column("numeric", {
    name: "montoudis",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  amountDis: number | null;

  @Column("character varying", { name: "licitado", nullable: true, length: 2 })
  tendered: string | null;

  @Column("date", { name: "fechaudi", nullable: true })
  udiDate: Date | null;

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
  valMaxUdi: number | null;

  @Column("character varying", { name: "causa", nullable: true, length: 100 })
  cause: string | null;
}
