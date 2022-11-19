import { Test, TestingModule } from '@nestjs/testing';
import { ComerLotController } from './comer-batch.controller';

describe('ComerLotController', () => {
  let controller: ComerLotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerLotController],
    }).compile();

    controller = module.get<ComerLotController>(ComerLotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
