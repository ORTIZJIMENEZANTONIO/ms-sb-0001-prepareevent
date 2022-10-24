import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentOfPartialReturnsService } from './treatment-of-partial-returns.service';

describe('TreatmentOfPartialReturnsService', () => {
  let service: TreatmentOfPartialReturnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatmentOfPartialReturnsService],
    }).compile();

    service = module.get<TreatmentOfPartialReturnsService>(TreatmentOfPartialReturnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
