import { CoffeeMixService } from './coffee-mix.service';
import { CoffeeMixDTO } from './coffee-mix.dto';
export declare class CoffeeMixController {
    private service;
    constructor(service: CoffeeMixService);
    findAll(): Promise<import("./coffee-mix.entity").CoffeeMix[]>;
    findOne(id: number): Promise<import("./coffee-mix.entity").CoffeeMix>;
    create(data: CoffeeMixDTO): Promise<import("./coffee-mix.entity").CoffeeMix>;
    update(id: number, data: CoffeeMixDTO): Promise<import("./coffee-mix.entity").CoffeeMix>;
    remove(id: number): Promise<import("./coffee-mix.entity").CoffeeMix>;
}
