import { Module } from '@nestjs/common';
import { makeCounterProvider } from 'nestjs-prometheus';


import { FileUtilController } from './file-util.controller';
import { FileUtilService } from './file-util.service';

@Module({
  controllers: [FileUtilController],
  providers: [
    FileUtilService,
    makeCounterProvider({
      name: "file_util_served",
      help: "file_util_help",
    }),
  ],
})
export class FileUtilModule {}
