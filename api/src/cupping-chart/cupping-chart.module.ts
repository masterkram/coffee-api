import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuppingChart } from './cupping-chart.entity';
import { CuppingChartController } from './cupping-chart.controller';
import { CuppingChartService } from './cupping-chart.service';

@Module({
  imports: [TypeOrmModule.forFeature([CuppingChart])],
  controllers: [CuppingChartController],
  providers: [CuppingChartService]
})
export class CuppingChartModule {}
