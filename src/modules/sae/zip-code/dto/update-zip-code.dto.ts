import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateZipCodeDto } from './create-zip-code.dto';

export class UpdateZipCodeDto extends PartialType(CreateZipCodeDto) {

  @ApiProperty({ example: 'Identificador del código postal' })
  codeToUpdate: string;

}