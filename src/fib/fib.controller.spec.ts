import { Test, TestingModule } from '@nestjs/testing';
import { FibController } from './fib.controller';
import { FibService } from './fib.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('FibController', () => {
  let controller: FibController;

  function expectFibonacciResult(number: number, expected: number): void {
    const result = controller.calclation(number);
    expect(result).toEqual({ result: expected });
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibController],
      providers: [FibService],
    }).compile();

    controller = module.get<FibController>(FibController);
  });

  it('should calculate the correct Fibonacci number', () => {
    expectFibonacciResult(1, 0);
    expectFibonacciResult(2, 1);
    expectFibonacciResult(3, 1);
    expectFibonacciResult(4, 2);
    expectFibonacciResult(5, 3);
    expectFibonacciResult(6, 5);
    expectFibonacciResult(10, 34);
  });

  it('should throw an error for invalid input', () => {
    expect(() => controller.calclation(0)).toThrowError(
      new HttpException('number must be a positive', HttpStatus.BAD_REQUEST),
    );
    expect(() => controller.calclation(-1)).toThrowError(
      new HttpException('number must be a positive', HttpStatus.BAD_REQUEST),
    );
  });
});
