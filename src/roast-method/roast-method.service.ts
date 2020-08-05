import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoastMethod } from './roast-method.entity';
import { RoastMethodDTO } from './roast-method.dto';

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

  async create(data: RoastMethodDTO) {
    const { name } = data;
    let roastMethod = await this.roastMethodRepository.findOne({ where: { name } });
    if (roastMethod) {
      throw new HttpException('Roast Method already exists', HttpStatus.FORBIDDEN);
    }
    roastMethod = this.roastMethodRepository.create(data);
    roastMethod.created = new Date();
    await this.roastMethodRepository.save(roastMethod);
    return roastMethod;
  }

  async update(id: number, data: RoastMethodDTO) {
    const roastMethod = await this.roastMethodRepository.findOne(id);
    if (!roastMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.roastMethodRepository.update(id, data);
    return this.roastMethodRepository.findOne(id);
  }

  async remove(id: number) {
    const roastMethod = await this.roastMethodRepository.findOne(id);
    if (!roastMethod) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.roastMethodRepository.delete(id);
    return roastMethod;
  }
}
