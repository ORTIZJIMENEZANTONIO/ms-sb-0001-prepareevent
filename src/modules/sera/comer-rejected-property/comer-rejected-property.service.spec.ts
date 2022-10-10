import { Test, TestingModule } from '@nestjs/testing';
import { ComerRejectedPropertyService } from './comer-rejected-property.service';

describe('ComerRejectedPropertyService', () => {
  let service: ComerRejectedPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComerRejectedPropertyService],
    }).compile();

    service = module.get<ComerRejectedPropertyService>(ComerRejectedPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
