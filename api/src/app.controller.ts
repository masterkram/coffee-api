import { Controller, Request, Get, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

}
