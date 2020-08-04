import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Page } from "src/page/page.entity";

@Entity()
export class Trainer extends User {

  @OneToOne(type => Page)
  @JoinColumn()
  page: Page;
}