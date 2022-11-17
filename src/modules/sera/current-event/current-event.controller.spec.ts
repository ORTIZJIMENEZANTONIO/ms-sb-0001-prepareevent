import { Test, TestingModule } from '@nestjs/testing';
import { CurrentEventController } from './current-event.controller';

describe('CurrentEventController', () => {
  let controller: CurrentEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentEventController],
    }).compile();

    controller = module.get<CurrentEventController>(CurrentEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
