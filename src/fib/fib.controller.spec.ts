import { Test, TestingModule } from '@nestjs/testing';
import { FibController } from './fib.controller';
import { FibService } from './fib.service';

describe('FibController', () => {
  let controller: FibController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibController],
      providers: [FibService],
    }).compile();

    controller = module.get<FibController>(FibController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
