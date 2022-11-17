import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity("comer_bienescol", { schema: "sera" })
export class ComerGoodsCol {
  @PrimaryColumn("numeric", { name: "no_clasif_bien", primary: false })
  goodClassificationId: string | null;

  @Column("character varying", {
    name: "desc_atributo",
    nullable: true,
    length: 30,
  })
  descriptionAttribute: string | null;

  @Column("character varying", { name: "b_val", nullable: true, length: 30 })
  bVal: string | null;

  @Column("character varying", { name: "cb_col", nullable: true, length: 30 })
  cbCol: string | null;

  @Column("character varying", { name: "direccion", nullable: true, length: 1 })
  address: string | null;
}
