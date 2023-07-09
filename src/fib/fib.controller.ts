import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
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
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
