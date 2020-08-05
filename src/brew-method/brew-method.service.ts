import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrewMethod } from './brew-method.entity';
import { BrewMethodDTO } from './brew-method.dto';

@Injectable()
export class BrewMethodService {
  constructor(
    @InjectRepository(BrewMethod)
    private brewMethodRepository: Repository<BrewMethod>
  ) {}

  async findAll() {
    return await this.brewMethodRepository.find();
  }

  async findOne(id: number) {
    const brewMethod = await this.brewMethodRepository.findOne(id);
    if (!brewMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return brewMethod;
  }

  async create(data: BrewMethodDTO) {
    const { name } = data;
    let brewMethod = await this.brewMethodRepository.findOne({ where: { name } });
    if (brewMethod) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    brewMethod = this.brewMethodRepository.create(data);
    brewMethod.created = new Date();
    await this.brewMethodRepository.save(brewMethod);
    return brewMethod;
  }

  async update(id: number, data: BrewMethodDTO) {
    const brewMethod = await this.brewMethodRepository.findOne(id);
    if (!brewMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.brewMethodRepository.update(id, data);
    return this.brewMethodRepository.findOne(id);
  }

  async remove(id: number) {
    const brewMethod = await this.brewMethodRepository.findOne(id);
    if (!brewMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.brewMethodRepository.delete(id);
    return brewMethod;
  }
}
