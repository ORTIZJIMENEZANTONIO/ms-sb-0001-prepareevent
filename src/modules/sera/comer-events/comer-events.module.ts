import { Module } from '@nestjs/common';
import { ComerEventsController } from './comer-events.controller';
import { ComerEventsService } from './comer-events.service';

@Module({
  controllers: [ComerEventsController],
  providers: [ComerEventsService]
})
export class ComerEventsModule {}
