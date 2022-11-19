import { Test, TestingModule } from '@nestjs/testing';
import { ComerBatchService } from './comer-batch.service';

describe('ComerBatchService', () => {
  let service: ComerBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerBatchService],
    }).compile();

    service = module.get<ComerBatchService>(ComerBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
