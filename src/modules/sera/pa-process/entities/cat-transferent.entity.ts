import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("cat_transferente", { schema: "sera" })
export class CatTransferentEntity {
  @ApiProperty({ example: "Identificador del transferente" })
  @PrimaryGeneratedColumn({
    name: "no_transferente",
  })
  transferentId: number | null;

  @Column("character varying", {
    name: "desc_transferente",
    nullable: true,
    length: 150,
  })
  transferentDesc: string | null;

  @Column("character varying", { name: "clave", nullable: true, length: 20 })
  keyCode: string | null;

  @Column("character varying", { name: "cvman", nullable: true, length: 6 })
  cvman: string | null;

  @Column("character varying", { name: "indcap", nullable: true, length: 2 })
  indcap: string | null;

  @Column("numeric", {
    name: "porc_comi",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  porcComi: string | null;

  @Column("numeric", { name: "activo", nullable: true, precision: 1, scale: 0 })
  active: string | null;

  @Column("character varying", { name: "riesgo", nullable: true, length: 2 })
  risk: string | null;

  // @Column("character", { name: "trial180", nullable: true, length: 1 })
  // trial180: string | null;
  //
  // @OneToMany(() => CatEmisora, (catEmisora) => catEmisora.noTransferente2)
  // catEmisoras: CatEmisora[];
}
