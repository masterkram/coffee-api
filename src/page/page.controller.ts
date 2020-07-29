import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDTO } from './page.dto';

@Controller('pages')
export class PageController {
  constructor(private service: PageService) {}
  @Get(':id')
  fetch(@Param('id') id: string) {
    return this.service.toHtml(id);
    // return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: PageDTO) {
    return this.service.create(body);
  }
}
