import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Unique,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { type } from 'os';
import { CoffeeController } from 'src/coffee/coffee.controller';
import { Coffee } from 'src/coffee/coffee.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Unique(['email'])
  email: string;

  @Column({ default: null })
  username: string;

  @Column({ default: null })
  firstname: string;

  @Column({ default: null })
  lastname: string;

  @Column()
  password: string;

  @Column({ default: null })
  created: Date;

  @ManyToMany(type => Coffee, coffee => coffee.users)
  @JoinTable()
  favoriteCoffees: Coffee[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject() {
    const { id, created, email } = this;
    return { id, created, email };
  }
}
