import { Variety } from './variety.entity';
import { Repository } from 'typeorm';
import { VarietyDTO } from './variety.dto';
export declare class VarietyService {
    private varietyRepository;
    constructor(varietyRepository: Repository<Variety>);
    findAll(): Promise<Variety[]>;
    findOne(id: number): Promise<Variety>;
    remove(id: number): Promise<Variety>;
    create(data: VarietyDTO): Promise<Variety>;
    update(id: number, data: Partial<VarietyDTO>): Promise<Variety>;
}
