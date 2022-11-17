import { Test, TestingModule } from '@nestjs/testing';
import { PaProcessService } from './pa-process.service';

describe('PaProcessService', () => {
  let service: PaProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaProcessService],
    }).compile();

    service = module.get<PaProcessService>(PaProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
