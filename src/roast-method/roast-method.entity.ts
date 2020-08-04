import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('roast-method')
export class RoastMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;
}
