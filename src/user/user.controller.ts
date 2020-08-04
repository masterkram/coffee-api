import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UsePipes,
  Logger,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../shared/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  private logger = new Logger('UserController');

  constructor(private service: UserService) {}

  @Get()
  fetchAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    const user = await this.fetch(req.user.userId);
    return user.toResponseObject();
  }
  
  @Get(':id')
  fetch(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: UserDTO) {
    this.logger.log(JSON.stringify(data));
    return this.service.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() data: UserDTO) {
    this.logger.log(JSON.stringify(data));
    return this.service.update(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
