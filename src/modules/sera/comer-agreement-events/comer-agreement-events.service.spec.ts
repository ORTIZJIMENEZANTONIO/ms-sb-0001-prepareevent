import { Test, TestingModule } from '@nestjs/testing';
import { ComerAgreementEventsService } from './comer-agreement-events.service';

describe('ComerAgreementEventsService', () => {
  let service: ComerAgreementEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerAgreementEventsService],
    }).compile();

    service = module.get<ComerAgreementEventsService>(ComerAgreementEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
