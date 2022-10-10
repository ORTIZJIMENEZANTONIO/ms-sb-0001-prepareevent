import { Module } from '@nestjs/common';
import { ComerRejectedPropertyService } from './comer-rejected-property.service';
import { ComerRejectedPropertyController } from './comer-rejected-property.controller';

@Module({
  providers: [ComerRejectedPropertyService],
  controllers: [ComerRejectedPropertyController]
})
export class ComerRejectedPropertyModule {}
