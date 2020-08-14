import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Variety } from './variety.entity';
import { Repository, getConnection, DatabaseType } from 'typeorm';
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

  async getTree(): Promise<any> {
    const arr = await getConnection()
    .createQueryBuilder()
    .addSelect("node.*, (COUNT(parent.name) - 1) AS depth")
    .from(Variety, 'node')
    .addFrom(Variety, 'parent')
    .where("node.lft BETWEEN parent.lft AND parent.rgt")
    .groupBy("node.name")
    .orderBy("node.lft")
    .execute();

    let currDepth = -1;

    const result = [];

    //create path structure for depths
    const path = [];
    
    //create 'root' node
    let olditem = {children: result};
    
    for(let item of arr){
        if(item.depth > currDepth){
            //remove possible old reference (old depth of other branch
            if(path[item.depth]) {
              path[item['depth']] = null;
            }
    
            //make sure we have an array entry
            if(!(olditem.children)) {
              olditem.children = [];
            }
    
            //acquire target
            path[item.depth] = olditem.children;
        }
        if(item.depth != currDepth) {
          olditem = null;
        }
        //set correct target
        currDepth = item.depth;
        //add item
        path[currDepth].push(item);
        //copy & remove reference
        olditem = item;
        item = null;
    }

    return result;
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

export class Tree<T> {
  private root: Node;

  constructor(root: Node) {
    this.root = root;
  }
}

class Node {
  public value: any;
  public children: Node[] | null;

  constructor(value: any, children: Node[] | null = null) {
    this.value = value;
    this.children = children ? children : [];
  }

  addChild(val: any) {
    this.children.push(new Node(val));
  }
}
