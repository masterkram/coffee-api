import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    comparePassword(attempt: string, password: string): Promise<boolean>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
