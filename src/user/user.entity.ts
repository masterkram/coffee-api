import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Unique, BeforeInsert } from 'typeorm';
import { Page } from '../page/page.entity';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['email'])
  email: string;

  @Column({default: null})
  username: string;

  @Column({default: null})
  firstname: string;

  @Column({default: null})
  lastname: string;

  @Column()
  password: string;

  @OneToOne(type => Page)
  @JoinColumn()
  page: Page;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
