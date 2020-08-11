import { BrewMethodService } from './brew-method.service';
import { BrewMethodDTO } from './brew-method.dto';
export declare class BrewMethodController {
    private service;
    constructor(service: BrewMethodService);
    findAll(): Promise<import("./brew-method.entity").BrewMethod[]>;
    findOne(id: number): Promise<import("./brew-method.entity").BrewMethod>;
    create(data: any): Promise<import("./brew-method.entity").BrewMethod>;
    update(id: number, data: BrewMethodDTO): Promise<import("./brew-method.entity").BrewMethod>;
    remove(id: number): Promise<import("./brew-method.entity").BrewMethod>;
}
