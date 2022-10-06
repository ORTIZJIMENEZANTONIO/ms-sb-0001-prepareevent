import { Column, Entity, Index, PrimaryColumn   } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity("cat_codigos_postales", { schema: "sae_nsbdb" })
export class ZipCodeEntity {
  
  @ApiProperty({ example: 'Identificador del código postal' })
  @PrimaryColumn("character varying", { 
    name: "codigo",
    length: 5,  
    nullable: false
  })
  codeZip: string;

  @ApiProperty({ example: 'Clave de la entidad federativa' })
  @Column("character varying", { 
    name: "cve_entidad",
    length: 30,  
    nullable: false
  })
  entityKey: string;

  @ApiProperty({ example: 'Clave de municipio' })
  @Column("character varying", { 
    name: "cve_municipio",
    length: 30,  
    nullable: false
  })
  townshipKey: string

  @ApiProperty({ example: 'Clave de localidad' })
  @Column("character varying", { 
    name: "cve_localidad",
    length: 30,  
    nullable: false
  })
  localityKey: string

  @ApiProperty({ example: 'Clave de asentamiento' })
  @Column("character varying", { 
    name: "cve_asentamiento",
    length: 30,  
    nullable: false
  })
  settlementKey: string

  @ApiProperty({ example: 'Usuario que creó el código postal' })
  @Column("character varying", { 
    name: "usuario_creacion",
    length: 100,  
    nullable: false
  })
  creationUser: string

  @ApiProperty({ example: 'Fecha de creación del código postal' })
  @Column("timestamp without time zone", {
    name: "fecha_creacion",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  creationDate: Date;

  @ApiProperty({ example: 'Usuario que realizó modificación del código postal' })
  @Column("character varying", { 
    name: "usuario_modificacion",
    length: 100,  
    nullable: false
  })
  editionUser: string

  @ApiProperty({ example: 'Fecha de modificación del código postal' })
  @Column("timestamp without time zone", {
    name: "fecha_modificacion",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
  })
  modificationDate: Date;
  
  @ApiProperty({ example: 'Version de la emisora' })
  @Column( { 
    type: "numeric",
    name: "version", 
    nullable: true
  })
  version: number | null;
}