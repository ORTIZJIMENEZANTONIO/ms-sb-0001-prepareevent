import { Module } from '@nestjs/common';
import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';
import { ComerPropertyByBatchService } from './comer-property-by-batch.service';

@Module({
  controllers: [ComerPropertyByBatchController],
  providers: [ComerPropertyByBatchService]
})
export class ComerPropertyByBatchModule {}
