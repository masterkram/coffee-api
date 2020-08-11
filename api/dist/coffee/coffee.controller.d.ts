import { CoffeeService } from './coffee.service';
import { CoffeeDTO } from './coffee.dto';
export declare class CoffeeController {
    private service;
    constructor(service: CoffeeService);
    findAll(): Promise<import("./coffee.entity").Coffee[]>;
    findOne(id: number): Promise<import("./coffee.entity").Coffee>;
    findUserCoffees(id: number): Promise<void>;
    create(data: CoffeeDTO): Promise<import("./coffee.entity").Coffee>;
    update(id: number, data: Partial<CoffeeDTO>): Promise<import("./coffee.entity").Coffee>;
    remove(id: number): Promise<import("./coffee.entity").Coffee>;
}
