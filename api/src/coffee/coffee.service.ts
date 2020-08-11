import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './coffee.entity';
import { CoffeeDTO } from './coffee.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>
  ) {}

  async findAll() {
    return await this.coffeeRepository.find();
  }

  async findOne(id) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  async create(data: CoffeeDTO) {
    const { name } = data;
    let coffee = await this.coffeeRepository.findOne({ where: { name } });
    if (coffee) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    coffee = this.coffeeRepository.create(data);
    coffee.created = new Date();
    await this.coffeeRepository.save(coffee);
    return coffee;
  }

  async update(id: number, data: Partial<CoffeeDTO>) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.coffeeRepository.update(id, data);
    return this.coffeeRepository.findOne(id);
  }

  async remove(id: number) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.coffeeRepository.delete(id);
    return coffee;
  }

  async findUserCoffees(id: number) {
    this.coffeeRepository.find({ where: {users: id}})
  }
}
