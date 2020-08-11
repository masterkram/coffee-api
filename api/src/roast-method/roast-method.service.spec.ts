import { Test, TestingModule } from '@nestjs/testing';
import { RoastMethodService } from './roast-method.service';

describe('RoastMethodService', () => {
  let service: RoastMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoastMethodService],
    }).compile();

    service = module.get<RoastMethodService>(RoastMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
