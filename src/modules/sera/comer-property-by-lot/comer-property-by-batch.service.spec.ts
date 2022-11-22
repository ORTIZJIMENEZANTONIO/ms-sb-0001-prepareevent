import { Test, TestingModule } from '@nestjs/testing';
import { ComerPropertyByBatchService } from './comer-property-by-batch.service';

describe('ComerPropertyByBatchService', () => {
  let service: ComerPropertyByBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerPropertyByBatchService],
    }).compile();

    service = module.get<ComerPropertyByBatchService>(ComerPropertyByBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
