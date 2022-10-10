import { Test, TestingModule } from '@nestjs/testing';
import { ComerAdjudirecController } from './comer-adjudirec.controller';

describe('ComerAdjudirecController', () => {
  let controller: ComerAdjudirecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerAdjudirecController],
    }).compile();

    controller = module.get<ComerAdjudirecController>(ComerAdjudirecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
