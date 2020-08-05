import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeDTO } from './coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private service: CoffeeService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: CoffeeDTO) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<CoffeeDTO>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
