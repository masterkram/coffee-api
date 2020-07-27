import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {

    constructor(private service: UserService) {}

    @Get()
    fetchAll() {
      return this.service.findAll();
    }

    @Get(':id')
    fetch(@Param('id') id: string) {
      return this.service.findOne(id);
    }

    @Post()
    create(@Body() data: UserDTO) {
      return this.service.create(data);
    }

    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() data: UserDTO
    ) {
      return this.service.update(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.service.remove(id);
    }
}