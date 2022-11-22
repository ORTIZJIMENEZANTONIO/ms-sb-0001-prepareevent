import { Test, TestingModule } from '@nestjs/testing';
import { ComerPropertyByBatchController } from './comer-property-by-batch.controller';

describe('ComerPropertyByBatchController', () => {
  let controller: ComerPropertyByBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerPropertyByBatchController],
    }).compile();

    controller = module.get<ComerPropertyByBatchController>(ComerPropertyByBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
