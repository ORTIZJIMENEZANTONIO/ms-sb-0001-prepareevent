import { Test, TestingModule } from '@nestjs/testing';
import { FileUtilController } from './file-util.controller';

describe('FileUtilController', () => {
  let controller: FileUtilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUtilController],
    }).compile();

    controller = module.get<FileUtilController>(FileUtilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
