import { Module } from '@nestjs/common';
import { CoffeeMixController } from './coffee-mix.controller';
import { CoffeeMixService } from './coffee-mix.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeMix } from './coffee-mix.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoffeeMix])],
  controllers: [CoffeeMixController],
  providers: [CoffeeMixService]
})
export class CoffeeMixModule {}
