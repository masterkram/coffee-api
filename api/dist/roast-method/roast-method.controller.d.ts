import { RoastMethodService } from './roast-method.service';
import { RoastMethodDTO } from './roast-method.dto';
export declare class RoastMethodController {
    private service;
    constructor(service: RoastMethodService);
    findAll(): Promise<import("./roast-method.entity").RoastMethod[]>;
    findOne(id: number): Promise<import("./roast-method.entity").RoastMethod>;
    create(data: RoastMethodDTO): Promise<import("./roast-method.entity").RoastMethod>;
    update(id: number, data: RoastMethodDTO): Promise<import("./roast-method.entity").RoastMethod>;
    remove(id: number): Promise<import("./roast-method.entity").RoastMethod>;
}
