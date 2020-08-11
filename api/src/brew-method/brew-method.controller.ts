import { Controller, Get, Param, Body, Put, Post, Delete } from '@nestjs/common';
import { BrewMethodService } from './brew-method.service';
import { BrewMethodDTO } from './brew-method.dto';

@Controller('brew-method')
export class BrewMethodController {
  constructor(private service: BrewMethodService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param() id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: BrewMethodDTO) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
