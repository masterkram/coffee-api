import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeMixService } from './coffee-mix.service';

describe('CoffeeMixService', () => {
  let service: CoffeeMixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeMixService],
    }).compile();

    service = module.get<CoffeeMixService>(CoffeeMixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
