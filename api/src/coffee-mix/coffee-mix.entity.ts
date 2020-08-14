import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable } from 'typeorm';
import { CoffeeGrain } from './coffee-grain.entity';

@Entity('coffee-mix')
export class CoffeeMix {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;

  @ManyToMany(type => CoffeeGrain)
  @JoinTable()
  coffeeGrains: CoffeeGrain[];

  @Column()
  created: Date;
}
