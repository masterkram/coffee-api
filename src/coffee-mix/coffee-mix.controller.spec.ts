import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeMixController } from './coffee-mix.controller';

describe('CoffeeMix Controller', () => {
  let controller: CoffeeMixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeMixController],
    }).compile();

    controller = module.get<CoffeeMixController>(CoffeeMixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
