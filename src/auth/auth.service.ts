
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);
    if (user && this.comparePassword(pass, user.password)) {
      return user.toResponseObject()
    }
    return null;
  }

  async comparePassword(attempt: string, password: string): Promise<boolean> {
    return await bcrypt.compare(attempt, password);
  }

  async login(user: any) {
    const payload = { username: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}