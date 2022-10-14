import { Test, TestingModule } from '@nestjs/testing';
import { MandateFunctionService } from './mandate-function.service';

describe('MandateFunctionService', () => {
  let service: MandateFunctionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MandateFunctionService],
    }).compile();

    service = module.get<MandateFunctionService>(MandateFunctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
