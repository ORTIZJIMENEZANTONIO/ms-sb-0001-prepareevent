import { Test, TestingModule } from '@nestjs/testing';
import { GoodNotDeliveredService } from './good-not-delivered.service';

describe('GoodNotDeliveredService', () => {
  let service: GoodNotDeliveredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodNotDeliveredService],
    }).compile();

    service = module.get<GoodNotDeliveredService>(GoodNotDeliveredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
