import { Test, TestingModule } from '@nestjs/testing';
import { FibService } from './fib.service';

describe('FibService', () => {
  let service: FibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibService],
    }).compile();

    service = module.get<FibService>(FibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
