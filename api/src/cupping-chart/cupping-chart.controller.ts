import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CuppingChartService } from './cupping-chart.service';

@Controller('cupping-chart')
export class CuppingChartController {
  constructor(private service: CuppingChartService) {}

  @Get('stats')
  getStats(): any[] {
    return this.service.getStats();
  }
}
