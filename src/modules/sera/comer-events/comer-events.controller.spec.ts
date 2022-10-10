import { Test, TestingModule } from '@nestjs/testing';
import { ComerEventsController } from './comer-events.controller';

describe('ComerEventsController', () => {
  let controller: ComerEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerEventsController],
    }).compile();

    controller = module.get<ComerEventsController>(ComerEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
