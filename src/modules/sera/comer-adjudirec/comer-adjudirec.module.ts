import { Module } from '@nestjs/common';
import { ComerAdjudirecService } from './comer-adjudirec.service';
import { ComerAdjudirecController } from './comer-adjudirec.controller';

@Module({
  providers: [ComerAdjudirecService],
  controllers: [ComerAdjudirecController]
})
export class ComerAdjudirecModule {}
