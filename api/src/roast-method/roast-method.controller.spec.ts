import { Test, TestingModule } from '@nestjs/testing';
import { RoastMethodController } from './roast-method.controller';

describe('RoastMethod Controller', () => {
  let controller: RoastMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoastMethodController],
    }).compile();

    controller = module.get<RoastMethodController>(RoastMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
