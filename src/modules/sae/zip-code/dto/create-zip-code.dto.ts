import { ApiProperty } from '@nestjs/swagger';

export class CreateZipCodeDto {

  @ApiProperty({ example: 'Identificador del código postal' })
  code: string;

  @ApiProperty({ example: 'Clave de la entidad federativa' })
  entityKey: string;

  @ApiProperty({ example: 'Clave de municipio' })
  townshipKey: string

  @ApiProperty({ example: 'Clave de localidad' })
  localityKey: string

  @ApiProperty({ example: 'Clave de asentamiento' })
  settlementKey: string

  @ApiProperty({ example: 'Usuario que creó el código postal' })
  creationUser: string

  @ApiProperty({ example: 'Fecha de creación del código postal' })
  creationDate: Date;

  @ApiProperty({ example: 'Usuario que realizó modificación del código postal' })
  editionUser: string

  @ApiProperty({ example: 'Fecha de modificación del código postal' })
  modificationDate: Date;
  
}
