import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoastMethod } from './roast-method.entity';

@Injectable()
export class RoastMethodService {
  constructor(
    @InjectRepository(RoastMethod)
    private roastMethodRepository: Repository<RoastMethod>
  ) {}

  async findAll() {
    return this.roastMethodRepository.find();
  }

  async findOne(id: number) {
    const roastMethod = await this.roastMethodRepository.findOne(id);
    if (!roastMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return roastMethod;
  }
}
