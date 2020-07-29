import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  html: string;
}
