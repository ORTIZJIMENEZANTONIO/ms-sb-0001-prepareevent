import { Module } from '@nestjs/common';
import { ComerClientController } from './comer-client.controller';
import { ComerClientService } from './comer-client.service';

@Module({
  controllers: [ComerClientController],
  providers: [ComerClientService]
})
export class ComerClientModule {}
