import { Test, TestingModule } from '@nestjs/testing';
import { ComerSentenceDispersionService } from './comer-sentence-dispersion.service';

describe('ComerSentenceDispersionService', () => {
  let service: ComerSentenceDispersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerSentenceDispersionService],
    }).compile();

    service = module.get<ComerSentenceDispersionService>(ComerSentenceDispersionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
