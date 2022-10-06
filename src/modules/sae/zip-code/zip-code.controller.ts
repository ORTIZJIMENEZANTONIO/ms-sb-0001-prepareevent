import { 
  Controller, 
  Inject
} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { MessagePattern } from '@nestjs/microservices';

import { ZipCodeService } from './zip-code.service';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
import { UpdateZipCodeDto } from './dto/update-zip-code.dto'; 
import { PaginationDto } from 'src/shared/dto/pagination.dto';

@Controller('zip-code')
export class ZipCodeController {
  constructor(
    private readonly zipCodeService: ZipCodeService, 
    @Inject( WINSTON_MODULE_PROVIDER ) private readonly logger: Logger
  ) {}
  
  @MessagePattern({ cmd: 'createZipCode' })
  createZipCode(  createZipCodeDto: CreateZipCodeDto ) {
    const zipCodeCreated = this.zipCodeService.createZipCode(createZipCodeDto);
    return zipCodeCreated
      ? zipCodeCreated
      : { statusCode: 503, message: "This zip code was not created", error: "Create Error"};
  }

  @MessagePattern({ cmd: 'getAllZipCodes' })
  async getAllZipCodes( {inicio, pageSize}: PaginationDto ) {
    return await this.zipCodeService.getAllZipCodes( {inicio, pageSize} );
  }
  
  @MessagePattern({ cmd: 'getZipCodeByCode' })
  async getZipCodeByCode( code: string ) {
    const codeFound = await this.zipCodeService.getOneZipCodeByCode(code);
    return codeFound
      ? codeFound
      : { statusCode: '404', message: 'Zip code not found', error: "Not found"};
  }

  @MessagePattern({ cmd: 'updateZipCode' })
  async updateZipCode( zipCodeData: UpdateZipCodeDto & CreateZipCodeDto ) {
    const zipCodeUpdated = await this.zipCodeService.updateZipCode( zipCodeData.codeToUpdate, zipCodeData );
    return zipCodeUpdated
      ? zipCodeUpdated
      : { statusCode: '404', message: 'Zip code not found', error: "Not found"};
  }

  @MessagePattern({ cmd: 'deleteZipCode' })
  async deleteZipCode( code: string ) {
    const { affected } = await this.zipCodeService.deleteZipCode( code );
    return affected == 0
      ? { statusCode: '404', message: 'Zip code not found', error: "Not found" }
      : { statusCode: '200', message: "Successfully deleted" };
  }
  
}
