import { Test, TestingModule } from '@nestjs/testing';
import { MandateFunctionController } from './mandate-function.controller';

describe('MandateFunctionController', () => {
  let controller: MandateFunctionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MandateFunctionController],
    }).compile();

    controller = module.get<MandateFunctionController>(MandateFunctionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
