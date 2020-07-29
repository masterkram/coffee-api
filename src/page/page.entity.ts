import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  html: string;

  @OneToOne(type => User, user => user.page)
  @JoinColumn()
  user: User
}
