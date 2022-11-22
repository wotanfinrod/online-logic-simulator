import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MouseMovesModule } from './mouse-moves/mouse-moves.module';

@Module({
  imports: [MouseMovesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
