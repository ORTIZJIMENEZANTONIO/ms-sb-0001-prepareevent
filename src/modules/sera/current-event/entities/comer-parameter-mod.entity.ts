import { Column, Entity, Index, OneToMany } from "typeorm";
//import { ComerParamxconceptos } from "./ComerParamxconceptos";

//@Index("isia256p1_comer_par", ["direccion", "parametro", "valor"], {
//  unique: true,
//})
@Entity("comer_parametrosmod", { schema: "sera" })
export class ComerParameterModEntity {
  
  @Column("character varying", { name: "parametro", primary: true, length: 20 })
  parameter: string;

  @Column("character varying", { name: "valor", primary: true, length: 500 })
  value: string;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "direccion", primary: true, length: 1 })
  address: string;

  @Column("numeric", {
    name: "id_tpevento",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  idTpevent: number | null;

  // @OneToMany(
  //   () => ComerParamxconceptos,
  //   (comerParamxconceptos) => comerParamxconceptos.comerParametrosmod
  // )
  // comerParamxconceptos: ComerParamxconceptos[];
}
