import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private service;
    private logger;
    constructor(service: UserService);
    fetchAll(): Promise<{
        id: number;
        created: Date;
        email: string;
    }[]>;
    getProfile(req: any): Promise<{
        id: number;
        created: Date;
        email: string;
    }>;
    fetch(id: number): Promise<import("./user.entity").User>;
    create(data: UserDTO): Promise<{
        id: number;
        created: Date;
        email: string;
    }>;
    update(id: string, data: UserDTO): Promise<import("./user.entity").User>;
    deleteUser(id: string): Promise<import("./user.entity").User>;
}
