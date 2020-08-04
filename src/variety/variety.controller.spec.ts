import { Test, TestingModule } from '@nestjs/testing';
import { VarietyController } from './variety.controller';

describe('Variety Controller', () => {
  let controller: VarietyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VarietyController],
    }).compile();

    controller = module.get<VarietyController>(VarietyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
