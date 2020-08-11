import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('variety')
export class Variety {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['name'])
  name: string;

  @Column()
  created: Date;
}
