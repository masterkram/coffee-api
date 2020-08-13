import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Variety } from './variety.entity';
import { Repository, getConnection } from 'typeorm';
import { VarietyDTO } from './variety.dto';

@Injectable()
export class VarietyService {
  constructor(
    @InjectRepository(Variety)
    private varietyRepository: Repository<Variety>,
  ) {}

  async findAll(): Promise<Variety[]> {
    return await this.varietyRepository.find();
  }

  async findOne(id: number): Promise<Variety> {
    const variety = await this.varietyRepository.findOne(id);
    if (!variety) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return variety;
  }

  async remove(id: number): Promise<Variety> {
    const variety = await this.varietyRepository.findOne(id);
    if (!variety) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.varietyRepository.delete(id);
    return variety;
  }

  async create(data: VarietyDTO): Promise<Variety> {
    const { name } = data;
    let variety = await this.varietyRepository.findOne({ where: { name } });
    if (variety) {
      throw new HttpException('variety already exists', HttpStatus.FORBIDDEN);
    }
    variety = this.varietyRepository.create(data);
    variety.created = new Date();
    await this.varietyRepository.save(variety);
    return variety;
  }

  async update(id: number, data: Partial<VarietyDTO>): Promise<Variety> {
    const variety = await this.varietyRepository.findOne(id);
    if (!variety) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.varietyRepository.update(id, data);
    return this.varietyRepository.findOne(id);
  }

  async getTree(root: number): Promise<Variety[]> {
    return await getConnection()
    .createQueryBuilder()
    .select("node.name")
    .from(Variety, 'node')
    .addFrom(Variety, 'parent')
    .where("node.lft BETWEEN parent.lft AND parent.rgt AND parent.id = :root", {root: root})
    .orderBy("node.lft")
    .execute();
  }

  async getLeaves(): Promise<Variety[]> {
    return this.varietyRepository.createQueryBuilder()
    .select('name')
    .where("rgt = lft + 1")
    .execute();
  }

  async getPath(id: number): Promise<Variety[]> {
    return await getConnection()
    .createQueryBuilder()
    .select("parent.name")
    .from(Variety, "node")
    .addFrom(Variety, "parent")
    .where("node.lft BETWEEN parent.lft AND parent.rgt AND node.id = :id", {id: id})
    .execute();
  }
}
