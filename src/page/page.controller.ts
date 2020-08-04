import { Controller, Get, Post, Param, Body, Delete, UseGuards, Request, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDTO } from './page.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Trainer } from 'src/user/trainer.entity';

@Controller('pages')
export class PageController {
  constructor(private service: PageService) {}
  @Get(':id')
  fetch(@Param('id') id: string) {
    return this.service.toHtml(id);
  }

  @Post()
  create(@Body() body: PageDTO) {
    return this.service.create(body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string, @Request() req) {
    const trainer = req.user;
    Logger.log(`${trainer.email}`, 'gst');
    if (!(trainer instanceof Trainer)) {
      throw new HttpException('ban', HttpStatus.BAD_REQUEST);
    }
    this.service.remove(id, trainer);
  }
}
