import { VarietyService } from './variety.service';
import { VarietyDTO } from './variety.dto';
export declare class VarietyController {
    private service;
    constructor(service: VarietyService);
    findAll(): Promise<import("./variety.entity").Variety[]>;
    findOne(id: number): Promise<import("./variety.entity").Variety>;
    create(data: VarietyDTO): Promise<import("./variety.entity").Variety>;
    update(id: number, data: VarietyDTO): Promise<import("./variety.entity").Variety>;
    remove(id: number): void;
}
