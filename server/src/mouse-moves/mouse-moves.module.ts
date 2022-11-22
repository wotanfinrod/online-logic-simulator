import { Module } from '@nestjs/common';
import { MouseMovesService } from './mouse-moves.service';
import { MouseMovesGateway } from './mouse-moves.gateway';

@Module({
  providers: [MouseMovesGateway, MouseMovesService]
})
export class MouseMovesModule {}
