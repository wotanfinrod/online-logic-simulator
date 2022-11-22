import { Test, TestingModule } from '@nestjs/testing';
import { MouseMovesGateway } from './mouse-moves.gateway';
import { MouseMovesService } from './mouse-moves.service';

describe('MouseMovesGateway', () => {
  let gateway: MouseMovesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MouseMovesGateway, MouseMovesService],
    }).compile();

    gateway = module.get<MouseMovesGateway>(MouseMovesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
