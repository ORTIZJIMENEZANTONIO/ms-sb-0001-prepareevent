import { Test, TestingModule } from '@nestjs/testing';
import { ComerRejectedPropertyController } from './comer-rejected-property.controller';

describe('ComerRejectedPropertyController', () => {
  let controller: ComerRejectedPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerRejectedPropertyController],
    }).compile();

    controller = module.get<ComerRejectedPropertyController>(ComerRejectedPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
