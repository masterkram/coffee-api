import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<{
        id: number;
        created: Date;
        email: string;
    }[]>;
    findOne(id: number): Promise<User>;
    remove(id: string): Promise<User>;
    create(data: UserDTO): Promise<{
        id: number;
        created: Date;
        email: string;
    }>;
    update(id: string, data: Partial<UserDTO>): Promise<User>;
    getByEmail(email: string): Promise<User>;
}
