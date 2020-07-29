import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async remove(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.userRepository.delete(id);
    return user;
  }

  async create(data: UserDTO) {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  async update(id: string, data: Partial<UserDTO>) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.userRepository.update(id, data);
    return this.userRepository.findOne(id);
  }

  async getByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
