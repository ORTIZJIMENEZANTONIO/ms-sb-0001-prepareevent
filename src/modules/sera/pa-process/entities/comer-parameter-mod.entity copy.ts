import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("comer_parametrosmod", { schema: "sera" })
export class ParameterModEntity {
  @PrimaryColumn({
    name: "parametro",
    type: "character varying",
    length: 20,
    nullable: false,
  })
  id: string;

  @PrimaryColumn({
    name: "valor",
    type: "character varying",
    length: 500,
    nullable: false,
  })
  value: string;

  @Column({
    name: "descripcion",
    type: "character varying",
    length: 200,
    nullable: true,
  })
  description: string;

  @PrimaryColumn({
    name: "direccion",
    type: "character varying",
    length: 1,
    nullable: false,
  })
  address: string;

  @Column({
    name: "id_tpevento",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  tpEventId: number;
}
