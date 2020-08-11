import { Test, TestingModule } from '@nestjs/testing';
import { BrewMethodController } from './brew-method.controller';

describe('BrewMethod Controller', () => {
  let controller: BrewMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrewMethodController],
    }).compile();

    controller = module.get<BrewMethodController>(BrewMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
