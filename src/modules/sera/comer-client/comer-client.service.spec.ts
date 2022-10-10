import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientService } from './comer-client.service';

describe('ComerClientService', () => {
  let service: ComerClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerClientService],
    }).compile();

    service = module.get<ComerClientService>(ComerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
