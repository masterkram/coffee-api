import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { CuppingChart } from './cupping-chart.entity';

@Injectable()
export class CuppingChartService {
  constructor(
    @InjectRepository(CuppingChart)
    private cuppingChartRepository: Repository<CuppingChart>
  ) {}

  getStats(): any[] {
    return getConnection()
    .getMetadata(CuppingChart)
    .ownColumns
    .map(column => {
      let prop = column.propertyName;
      prop = prop.replace( /([A-Z])/g, " $1" );
      prop = prop.charAt(0).toUpperCase() + prop.slice(1);
      return ({"label": prop, "value": 100})
    })
    .slice(1, -1)
    ;
  }
}
