import { Repository } from 'typeorm';
import { Coffee } from './coffee.entity';
import { CoffeeDTO } from './coffee.dto';
export declare class CoffeeService {
    private coffeeRepository;
    constructor(coffeeRepository: Repository<Coffee>);
    findAll(): Promise<Coffee[]>;
    findOne(id: any): Promise<Coffee>;
    create(data: CoffeeDTO): Promise<Coffee>;
    update(id: number, data: Partial<CoffeeDTO>): Promise<Coffee>;
    remove(id: number): Promise<Coffee>;
    findUserCoffees(id: number): Promise<void>;
}
