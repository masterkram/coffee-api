import { Controller, Get, Param } from '@nestjs/common';
import { BrewMethodService } from './brew-method.service';

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
}
