import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { VarietyService, Tree } from './variety.service';
import { VarietyDTO } from './variety.dto';

@Controller('variety')
export class VarietyController {
  constructor(private service: VarietyService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/tree')
  getTree() {
    return this.service.getTree();
  }

  @Get('leaves')
  getLeaves() {
    return this.service.getLeaves();
  }

  @Get('path/:id')
  getPath(@Param('id') id: number) {
    return this.service.getPath(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: VarietyDTO) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: VarietyDTO) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.service.remove(id);
  }
}
