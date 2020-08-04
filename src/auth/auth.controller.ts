import { Controller, Get, Post, Param, Body, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
