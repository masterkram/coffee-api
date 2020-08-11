import { Repository } from 'typeorm';
import { RoastMethod } from './roast-method.entity';
import { RoastMethodDTO } from './roast-method.dto';
export declare class RoastMethodService {
    private roastMethodRepository;
    constructor(roastMethodRepository: Repository<RoastMethod>);
    findAll(): Promise<RoastMethod[]>;
    findOne(id: number): Promise<RoastMethod>;
    create(data: RoastMethodDTO): Promise<RoastMethod>;
    update(id: number, data: RoastMethodDTO): Promise<RoastMethod>;
    remove(id: number): Promise<RoastMethod>;
}
