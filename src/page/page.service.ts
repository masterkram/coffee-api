import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';
import { PageDTO } from './page.dto';
import { User } from 'src/user/user.entity';
import { Trainer } from 'src/user/trainer.entity';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page)
    private pageRepository: Repository<Page>
  ) {}

  async toHtml(id: string) {
    const page = await this.findOne(id);
    return page.html;
  }

  async findOne(id: string): Promise<Page> {
    return await this.pageRepository.findOne(id);
  }

  async create(data: PageDTO) {
    const page = this.pageRepository.create(data);
    await this.pageRepository.save(page);
  }

  async remove(id: string, trainer: Trainer): Promise<Page> {
    const page = await this.pageRepository.findOne(id);
    if (!page) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    if (!(trainer.page.id === page.id)) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    await this.pageRepository.delete(id);
    return page;
  }
}
