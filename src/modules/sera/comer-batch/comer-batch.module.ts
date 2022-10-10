import { Module } from '@nestjs/common';
import { ComerBatchController } from './comer-batch.controller';
import { ComerBatchService } from './comer-batch.service';

@Module({
  controllers: [ComerBatchController],
  providers: [ComerBatchService]
})
export class ComerBatchModule {}
