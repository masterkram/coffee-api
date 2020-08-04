import { Controller, Get, Param } from '@nestjs/common';
import { RoastMethodService } from './roast-method.service';

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
}
