import { Test, TestingModule } from '@nestjs/testing';
import { ComerBatchController } from './comer-batch.controller';

describe('ComerBatchController', () => {
  let controller: ComerBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerBatchController],
    }).compile();

    controller = module.get<ComerBatchController>(ComerBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
