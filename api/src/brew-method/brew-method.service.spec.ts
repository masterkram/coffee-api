import { Test, TestingModule } from '@nestjs/testing';
import { BrewMethodService } from './brew-method.service';

describe('BrewMethodService', () => {
  let service: BrewMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrewMethodService],
    }).compile();

    service = module.get<BrewMethodService>(BrewMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
