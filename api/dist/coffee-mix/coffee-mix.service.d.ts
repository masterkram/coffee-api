import { CoffeeMix } from './coffee-mix.entity';
import { Repository } from 'typeorm';
import { CoffeeMixDTO } from './coffee-mix.dto';
export declare class CoffeeMixService {
    private coffeeMixRepository;
    constructor(coffeeMixRepository: Repository<CoffeeMix>);
    findAll(): Promise<CoffeeMix[]>;
    findOne(id: number): Promise<CoffeeMix>;
    remove(id: number): Promise<CoffeeMix>;
    create(data: CoffeeMixDTO): Promise<CoffeeMix>;
    update(id: number, data: Partial<CoffeeMixDTO>): Promise<CoffeeMix>;
}
