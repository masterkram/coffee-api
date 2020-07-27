import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(data: UserDTO) {
    const user = await this.userRepository.create(data);
    await this.userRepository.save(user);
  }

  async update(id: string, data: Partial<UserDTO>) {
    await this.userRepository.update(id, data);
    return await this.userRepository.findOne(id);
  }
}
