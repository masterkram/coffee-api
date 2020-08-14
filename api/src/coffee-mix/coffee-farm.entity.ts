import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { CoffeeGrain } from './coffee-grain.entity';

@Entity('coffee-farm')
export class CoffeeFarm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;

  @OneToMany(type => CoffeeGrain, grain => grain.origin)
  grains: CoffeeGrain[];

  @Column()
  created: Date;
}
