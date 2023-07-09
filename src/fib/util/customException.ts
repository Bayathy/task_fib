/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(status: HttpStatus, message: string) {
    super(message, status);
  }
}
