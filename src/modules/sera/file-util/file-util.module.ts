import { Module } from '@nestjs/common';
import { FileUtilController } from './file-util.controller';
import { FileUtilService } from './file-util.service';

@Module({
  controllers: [FileUtilController],
  providers: [FileUtilService]
})
export class FileUtilModule {}
