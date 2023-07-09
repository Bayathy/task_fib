import { Controller, Get, Query, HttpException } from '@nestjs/common';
import { FibService } from './fib.service';

@Controller('fib')
export class FibController {
  constructor(private readonly fibService: FibService) {}
  @Get()
  calclation(@Query('n') number: number) {
    try {
      return {
        result: this.fibService.calclation(number),
      };
    } catch (e) {
      if (e instanceof HttpException) {
        return {
          status: e.getStatus(),
          message: e.message,
        };
      }
    }
  }
}
