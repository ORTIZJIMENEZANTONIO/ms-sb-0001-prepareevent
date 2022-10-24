import { Test, TestingModule } from '@nestjs/testing';
import { PartialPropertyDeliveredService } from './partial-property-delivered.service';

describe('PartialPropertyDeliveredService', () => {
  let service: PartialPropertyDeliveredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartialPropertyDeliveredService],
    }).compile();

    service = module.get<PartialPropertyDeliveredService>(PartialPropertyDeliveredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
