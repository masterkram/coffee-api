import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('coffee-mix')
export class CoffeeMix {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;

  @Column()
  created: Date;
}
