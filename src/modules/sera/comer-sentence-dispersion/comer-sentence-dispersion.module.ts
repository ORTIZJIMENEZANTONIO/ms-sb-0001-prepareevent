import { Module } from '@nestjs/common';
import { ComerSentenceDispersionController } from './comer-sentence-dispersion.controller';
import { ComerSentenceDispersionService } from './comer-sentence-dispersion.service';

@Module({
  controllers: [ComerSentenceDispersionController],
  providers: [ComerSentenceDispersionService]
})
export class ComerSentenceDispersionModule {}
