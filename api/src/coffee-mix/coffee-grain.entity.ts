import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { CoffeeFarm } from './coffee-farm.entity';

@Entity('coffee-grain')
export class CoffeeGrain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;

  @ManyToOne(type => CoffeeFarm, farm => farm.grains)
  origin: CoffeeFarm;

  @Column()
  created: Date;
}
