import { Column, Entity } from "typeorm";
@Entity("tmp_eventos_comer", { schema: "comer" })
export class TmpEventsComerEntity {
  @Column("numeric", {
    primary: true,
    name: "id_evento",
  })
  id: string;

  @Column("character varying", {
    name: "cve_proceso",
    nullable: true,
    length: 120,
  })
  processKey: string | null;

  @Column({ type: "date", name: "fec_fallo", nullable: true })
  failDate: Date | null;

  @Column("numeric", {
    name: "id_tpevento",
    precision: 10,
    scale: 0,
  })
  tpeventId: number;

  @Column("character varying", {
    name: "direccion",
    length: 1,
  })
  address: string;

  @Column("character varying", {
    name: "lugar",
    nullable: true,
    length: 100,
  })
  place: string | null;

  @Column("character varying", {
    name: "id_estatusvta",
    nullable: true,
    length: 4,
  })
  statusVtaId: string | null;

  @Column({ type: "date", name: "fecha_evento", nullable: true })
  eventDate: Date | null;

  @Column("numeric", {
    name: "id_tpeventoaf",
    precision: 2,
    scale: 0,
  })
  atTpeventId: number;
}
