import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentOfPartialReturnsController } from './treatment-of-partial-returns.controller';

describe('TreatmentOfPartialReturnsController', () => {
  let controller: TreatmentOfPartialReturnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentOfPartialReturnsController],
    }).compile();

    controller = module.get<TreatmentOfPartialReturnsController>(TreatmentOfPartialReturnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
