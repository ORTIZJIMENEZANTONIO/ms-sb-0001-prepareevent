import { Test, TestingModule } from '@nestjs/testing';
import { ComerClientController } from './comer-client.controller';

describe('ComerClientController', () => {
  let controller: ComerClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComerClientController],
    }).compile();

    controller = module.get<ComerClientController>(ComerClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
