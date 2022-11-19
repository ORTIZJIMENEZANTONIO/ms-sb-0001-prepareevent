import { Test, TestingModule } from '@nestjs/testing';
import { ComerLotService } from './comer-batch.service';

describe('ComerLotService', () => {
  let service: ComerLotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerLotService],
    }).compile();

    service = module.get<ComerLotService>(ComerLotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
