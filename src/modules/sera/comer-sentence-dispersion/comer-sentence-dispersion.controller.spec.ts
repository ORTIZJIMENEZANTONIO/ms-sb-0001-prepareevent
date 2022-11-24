import { Test, TestingModule } from '@nestjs/testing';
import { ComerSentenceDispersionController } from './comer-sentence-dispersion.controller';

describe('ComerSentenceDispersionController', () => {
  let controller: ComerSentenceDispersionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerSentenceDispersionController],
    }).compile();

    controller = module.get<ComerSentenceDispersionController>(ComerSentenceDispersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
