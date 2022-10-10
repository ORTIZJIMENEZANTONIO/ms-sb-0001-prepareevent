import { Test, TestingModule } from '@nestjs/testing';
import { ComerAgreementEventsController } from './comer-agreement-events.controller';

describe('ComerAgreementEventsController', () => {
  let controller: ComerAgreementEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerAgreementEventsController],
    }).compile();

    controller = module.get<ComerAgreementEventsController>(ComerAgreementEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
