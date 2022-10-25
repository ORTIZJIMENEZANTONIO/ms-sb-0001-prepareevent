import { Test, TestingModule } from '@nestjs/testing';
import { PartialPropertyDeliveredController } from './partial-property-delivered.controller';

describe('PartialPropertyDeliveredController', () => {
  let controller: PartialPropertyDeliveredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartialPropertyDeliveredController],
    }).compile();

    controller = module.get<PartialPropertyDeliveredController>(PartialPropertyDeliveredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
