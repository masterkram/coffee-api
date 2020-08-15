import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { CoffeeMix } from 'src/coffee-mix/coffee-mix.entity';
import { RoastMethod } from 'src/roast-method/roast-method.entity';
import { BrewMethod } from 'src/brew-method/brew-method.entity';
import { Coffee } from '../coffee/coffee.entity';

@Entity('cupping-chart')
export class CuppingChart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fragance: number;

  @Column()
  wetAroma: number;

  @Column()
  brightness: number;

  @Column()
  flavor: number;

  @Column()
  body: number;

  @Column()
  sweetness: number;

  @Column()
  cleanCup: number;

  @Column()
  complexity: number;

  @Column()
  uniformity: number;

  @Column()
  created: Date;
}
