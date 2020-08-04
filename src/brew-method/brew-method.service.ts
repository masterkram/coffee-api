import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrewMethod } from './brew-method.entity';

@Injectable()
export class BrewMethodService {
  constructor(
    @InjectRepository(BrewMethod)
    private brewMethodRepository: Repository<BrewMethod>
  ) {}

  async findAll() {
    return await this.brewMethodRepository.find();
  }

  async findOne(id) {
    const brewMethod = await this.brewMethodRepository.findOne(id);
    if (!brewMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return brewMethod;
  }
}
