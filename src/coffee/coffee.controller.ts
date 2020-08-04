import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
}
