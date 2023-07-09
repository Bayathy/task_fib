import { PartialType } from '@nestjs/mapped-types';
import { CreateFibDto } from './create-fib.dto';

export class UpdateFibDto extends PartialType(CreateFibDto) {}
