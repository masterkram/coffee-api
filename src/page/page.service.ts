import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';
import { PageDTO } from './page.dto';

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
}
