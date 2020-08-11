import { Repository } from 'typeorm';
import { BrewMethod } from './brew-method.entity';
import { BrewMethodDTO } from './brew-method.dto';
export declare class BrewMethodService {
    private brewMethodRepository;
    constructor(brewMethodRepository: Repository<BrewMethod>);
    findAll(): Promise<BrewMethod[]>;
    findOne(id: number): Promise<BrewMethod>;
    create(data: BrewMethodDTO): Promise<BrewMethod>;
    update(id: number, data: BrewMethodDTO): Promise<BrewMethod>;
    remove(id: number): Promise<BrewMethod>;
}
