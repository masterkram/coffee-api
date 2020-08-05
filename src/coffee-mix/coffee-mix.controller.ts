import { Controller, Param, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { CoffeeMixService } from './coffee-mix.service';
import { CoffeeMixDTO } from './coffee-mix.dto';

@Controller('coffee-mix')
export class CoffeeMixController {
  constructor(private service: CoffeeMixService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: CoffeeMixDTO) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: CoffeeMixDTO) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
