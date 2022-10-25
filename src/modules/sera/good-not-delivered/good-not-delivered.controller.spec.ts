import { Test, TestingModule } from '@nestjs/testing';
import { GoodNotDeliveredController } from './good-not-delivered.controller';

describe('GoodNotDeliveredController', () => {
  let controller: GoodNotDeliveredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodNotDeliveredController],
    }).compile();

    controller = module.get<GoodNotDeliveredController>(GoodNotDeliveredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
