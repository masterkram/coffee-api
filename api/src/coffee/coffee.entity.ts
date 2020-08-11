import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { CoffeeMix } from 'src/coffee-mix/coffee-mix.entity';
import { RoastMethod } from 'src/roast-method/roast-method.entity';
import { BrewMethod } from 'src/brew-method/brew-method.entity';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(type => CoffeeMix)
  coffeeMix: CoffeeMix;

  @ManyToOne(type => RoastMethod)
  roastMethod: RoastMethod;

  @ManyToOne(type => BrewMethod)
  brewMethod: BrewMethod;

  @ManyToMany(
    type => User,
    user => user.favoriteCoffees,
  )
  @JoinTable()
  users: User[];

  @Column()
  created: Date;
}
