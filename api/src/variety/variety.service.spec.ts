import { Test, TestingModule } from '@nestjs/testing';
import { VarietyService } from './variety.service';

describe('VarietyService', () => {
  let service: VarietyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VarietyService],
    }).compile();

    service = module.get<VarietyService>(VarietyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
