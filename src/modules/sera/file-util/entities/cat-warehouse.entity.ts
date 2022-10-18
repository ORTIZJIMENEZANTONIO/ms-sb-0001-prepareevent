import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("cat_almacenes", { schema: "sera" })
export class WarehouseEntity {
  @ApiProperty({ example: "Identificador del almacén por ejemplo 1" })
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "no_almacen",
  })
  idWarehouse: number | null;

  @ApiProperty({ example: "Descripción del almacén" })
  @Column({
    type: "character varying",
    length: 200,
    name: "descripcion",
    nullable: false,
  })
  description: string;

  @ApiProperty({ example: "Ubicación del almacén" })
  @Column({
    type: "character varying",
    length: 200,
    name: "ubicacion",
    nullable: false,
  })
  ubication: string;

  @ApiProperty({ example: "Ubicación del almacén" })
  @Column({
    type: "character varying",
    length: 30,
    name: "responsable",
    nullable: false,
  })
  manager: string;

  @ApiProperty({ example: "Número de registro ej. 1" })
  @Column({
    type: "numeric",
    name: "no_registro",
    nullable: true,
  })
  registerNumber: number | null;

  @ApiProperty({ example: "Código de estado de almacén ej. 1" })
  @Column({
    type: "numeric",
    name: "codigo_estado",
    nullable: true,
  })
  stateCode: number | null;

  @ApiProperty({ example: "Código de ciudad de almacén ej. 1" })
  @Column({
    type: "numeric",
    name: "codigo_ciudad",
    nullable: true,
  })
  cityCode: number | null;

  @ApiProperty({ example: "Código de municicpio de almacén ej. 1" })
  @Column({
    type: "numeric",
    name: "codigo_municipio",
    nullable: true,
  })
  municipalityCode: number | null;

  @ApiProperty({ example: "Código de localidad de almacén ej. 1" })
  @Column({
    type: "numeric",
    name: "codigo_localidad",
    nullable: true,
  })
  localityCode: number | null;

  @ApiProperty({ example: "activo del almacén" })
  @Column({
    type: "character varying",
    length: 1,
    name: "ind_activo",
    nullable: true,
  })
  indActive: string | null;

  @ApiProperty({ example: "Tipo del almacén" })
  @Column({
    type: "character varying",
    length: 50,
    name: "tipo_almacen",
    nullable: true,
  })
  type: string | null;

  @ApiProperty({ example: "Delegación responsable del almacén" })
  @Column({
    type: "numeric",
    name: "delegacion_res",
    nullable: true,
  })
  responsibleDelegation: number | null;
}
