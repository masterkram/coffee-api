import { Module } from '@nestjs/common';
import { RoastMethodController } from './roast-method.controller';
import { RoastMethodService } from './roast-method.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoastMethod } from './roast-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoastMethod])],
  controllers: [RoastMethodController],
  providers: [RoastMethodService]
})
export class RoastMethodModule {}
