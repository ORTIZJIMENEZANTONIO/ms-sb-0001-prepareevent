import { Test, TestingModule } from '@nestjs/testing';
import { PaProcessController } from './pa-process.controller';

describe('PaProcessController', () => {
  let controller: PaProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaProcessController],
    }).compile();

    controller = module.get<PaProcessController>(PaProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
