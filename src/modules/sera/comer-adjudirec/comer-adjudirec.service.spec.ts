import { Test, TestingModule } from '@nestjs/testing';
import { ComerAdjudirecService } from './comer-adjudirec.service';

describe('ComerAdjudirecService', () => {
  let service: ComerAdjudirecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerAdjudirecService],
    }).compile();

    service = module.get<ComerAdjudirecService>(ComerAdjudirecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
