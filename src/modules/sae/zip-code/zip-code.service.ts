import { Injectable, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectMetric } from '@willsoto/nestjs-prometheus'; 
import { Counter } from 'prom-client';

import { ZipCodeEntity } from './entities/zipCodeEntity.entity';
import { CreateZipCodeDto } from './dto/create-zip-code.dto';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

@Injectable()
export class ZipCodeService {
  constructor(  
    @InjectRepository(ZipCodeEntity) private zipCodeRepository: Repository<ZipCodeEntity>, 
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger:Logger,
    @InjectMetric('zip_code_served') public counter:Counter<string> 
  ) {}

  async createZipCode( createZipCodeDto: CreateZipCodeDto ) {
    return await this.zipCodeRepository.save( createZipCodeDto );
  }

  async getAllZipCodes( {inicio, pageSize}: PaginationDto ) {
    this.counter.inc();
    const [result, total] = await this.zipCodeRepository.findAndCount({
      skip: ( inicio ? inicio - 1 : Number(0) ), 
      take: pageSize,
      order: { codeZip: 'DESC' }
    });

    return {
      data: result,
      count: total
    }
  }

  async getOneZipCodeByCode( code: string ) {
    return await this.zipCodeRepository.findOne( { where: { codeZip : code } } );
  }

  async updateZipCode( code: string, updateZipCodeDto: CreateZipCodeDto ) {
    const zipCode = await this.zipCodeRepository.findOne({ where: { codeZip : code } });
  
    if (zipCode) {
      this.zipCodeRepository.merge( zipCode, updateZipCodeDto);
      return await this.zipCodeRepository.save( zipCode );
    } 
    return false;
  }

  async deleteZipCode( code: string ) {
    return await this.zipCodeRepository.delete( code )
  }

}
