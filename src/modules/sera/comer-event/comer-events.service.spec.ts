import { Test, TestingModule } from '@nestjs/testing';
import { ComerEventsService } from './comer-events.service';

describe('ComerEventsService', () => {
  let service: ComerEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerEventsService],
    }).compile();

    service = module.get<ComerEventsService>(ComerEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
