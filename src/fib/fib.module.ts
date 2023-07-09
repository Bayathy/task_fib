import { Module } from '@nestjs/common';
import { FibService } from './fib.service';
import { FibController } from './fib.controller';

@Module({
  controllers: [FibController],
  providers: [FibService],
})
export class FibModule {}
