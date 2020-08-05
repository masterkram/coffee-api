import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { RoastMethodService } from './roast-method.service';
import { RoastMethodDTO } from './roast-method.dto';

@Controller('roast-method')
export class RoastMethodController {
  constructor(private service: RoastMethodService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: RoastMethodDTO) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: RoastMethodDTO) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
