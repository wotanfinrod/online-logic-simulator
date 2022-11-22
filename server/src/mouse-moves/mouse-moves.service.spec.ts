import { Test, TestingModule } from '@nestjs/testing';
import { MouseMovesService } from './mouse-moves.service';

describe('MouseMovesService', () => {
  let service: MouseMovesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MouseMovesService],
    }).compile();

    service = module.get<MouseMovesService>(MouseMovesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
