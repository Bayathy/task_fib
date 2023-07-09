import { Injectable } from '@nestjs/common';

@Injectable()
export class FibService {
  calclation(number: number) {
    if (number <= 0 || isNaN(number)) {
      throw new Error('number must be a positive');
    } else if (number === 1) {
      return 0;
    } else if (number === 2) {
      return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 3; i <= number; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    return curr;
  }
}
