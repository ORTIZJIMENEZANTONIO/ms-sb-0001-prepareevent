import { Column, Entity, Index } from "typeorm";

@Index(
  "bienes_entrega_parcial_pkey",
  ["noBien", "noBienParcialEn", "noBienParcialNe"],
  { unique: true }
)
@Entity("bienes_entrega_parcial", { schema: "sera" })
export class GoodPartialDelivery {
  @Column("numeric", {
    primary: true,
    name: "no_bien",
    precision: 10,
    scale: 0,
  })
  id: string;

  @Column("numeric", {
    primary: true,
    name: "no_bien_parcial_ne",
    precision: 10,
    scale: 0,
  })
  nePartialGoddNumber: string;

  @Column("numeric", {
    primary: true,
    name: "no_bien_parcial_en",
    precision: 10,
    scale: 0,
  })
  enPartialGoddNumber: string;

  @Column("date", { name: "fecha", nullable: true })
  date: string | null;

}
