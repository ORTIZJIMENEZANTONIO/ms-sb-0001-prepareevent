import { Module } from '@nestjs/common';
import { ComerAgreementEventsService } from './comer-agreement-events.service';
import { ComerAgreementEventsController } from './comer-agreement-events.controller';

@Module({
  providers: [ComerAgreementEventsService],
  controllers: [ComerAgreementEventsController]
})
export class ComerAgreementEventsModule {}
