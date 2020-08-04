import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoffeeMix } from './coffee-mix.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeMixService {
  constructor(
    @InjectRepository(CoffeeMix)
    private coffeeMixRepository: Repository<CoffeeMix>
  ) {}

  async findAll() {
    return await this.coffeeMixRepository.find();
  }

  async findOne(id: number) {
    const coffeeMix = await this.coffeeMixRepository.findOne(id);
    if (!coffeeMix) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return coffeeMix;
  }
}
