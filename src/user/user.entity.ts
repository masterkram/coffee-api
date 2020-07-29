import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Unique } from 'typeorm';
import { Page } from '../page/page.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['email'])
  email: string;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  @OneToOne(type => Page)
  @JoinColumn()
  page: Page;
}
