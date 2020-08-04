import { Module } from '@nestjs/common';
import { BrewMethodService } from './brew-method.service';
import { BrewMethodController } from './brew-method.controller';
import { BrewMethod } from './brew-method.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BrewMethod])],
  providers: [BrewMethodService],
  controllers: [BrewMethodController]
})
export class BrewMethodModule {}
