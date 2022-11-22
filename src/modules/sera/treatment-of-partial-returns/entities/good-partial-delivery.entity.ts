import { Column, Entity, Index } from "typeorm";

@Entity("bienes_entrega_parcial", { schema: "sera" })
export class GoodPartialDeliveryEntity {
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
  date: Date | null;
}
