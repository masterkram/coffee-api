import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoffeeMix } from './coffee-mix.entity';
import { Repository } from 'typeorm';
import { Coffee } from 'src/coffee/coffee.entity';
import { CoffeeDTO } from 'src/coffee/coffee.dto';
import { CoffeeMixDTO } from './coffee-mix.dto';

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

  async remove(id: number): Promise<CoffeeMix> {
    const coffeeMix = await this.coffeeMixRepository.findOne(id);
    if (!coffeeMix) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.coffeeMixRepository.delete(id);
    return coffeeMix;
  }

  async create(data: CoffeeMixDTO): Promise<CoffeeMix> {
    const { name } = data;
    let coffeeMix = await this.coffeeMixRepository.findOne({ where: { name } });
    if (coffeeMix) {
      throw new HttpException('coffeeMix already exists', HttpStatus.FORBIDDEN);
    }
    coffeeMix = this.coffeeMixRepository.create(data);
    coffeeMix.created = new Date();
    await this.coffeeMixRepository.save(coffeeMix);
    return coffeeMix;
  }

  async update(id: number, data: Partial<CoffeeMixDTO>): Promise<CoffeeMix> {
    const coffeeMix = await this.coffeeMixRepository.findOne(id);
    if (!coffeeMix) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.coffeeMixRepository.update(id, data);
    return this.coffeeMixRepository.findOne(id);
  }
}
