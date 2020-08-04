import { Controller, Param, Get } from '@nestjs/common';
import { CoffeeMixService } from './coffee-mix.service';

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
}
