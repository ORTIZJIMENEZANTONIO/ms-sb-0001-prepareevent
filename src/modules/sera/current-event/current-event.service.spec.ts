import { Test, TestingModule } from '@nestjs/testing';
import { CurrentEventService } from './current-event.service';

describe('CurrentEventService', () => {
  let service: CurrentEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentEventService],
    }).compile();

    service = module.get<CurrentEventService>(CurrentEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
