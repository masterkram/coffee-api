import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Trainer } from 'src/user/trainer.entity';

@Entity('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  html: string;

  @OneToOne(type => Trainer, trainer => trainer.page)
  @JoinColumn()
  trainer: Trainer
}
