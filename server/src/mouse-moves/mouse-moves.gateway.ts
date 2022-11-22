import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MouseMovesService } from './mouse-moves.service';
import { CreateMouseMoveDto, MouseMoveDTO } from './dto/create-mouse-move.dto';
import { UpdateMouseMoveDto } from './dto/update-mouse-move.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MouseMovesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly mouseMovesService: MouseMovesService) {}

  @SubscribeMessage('createMouseMove')
  create(@MessageBody() createMouseMoveDto: CreateMouseMoveDto) {
    console.log(createMouseMoveDto);
    this.server.emit('mouseMove', createMouseMoveDto);
    return this.mouseMovesService.create(createMouseMoveDto);
  }

  @SubscribeMessage('mouseMove')
  findAll(@MessageBody() mouseMoveDTO: MouseMoveDTO) {
    this.server.emit('mouseMove', mouseMoveDTO);
    return this.mouseMovesService.findAll();
  }

  @SubscribeMessage('findOneMouseMove')
  findOne(@MessageBody() id: number) {
    return this.mouseMovesService.findOne(id);
  }

  @SubscribeMessage('updateMouseMove')
  update(@MessageBody() updateMouseMoveDto: UpdateMouseMoveDto) {
    return this.mouseMovesService.update(
      updateMouseMoveDto.id,
      updateMouseMoveDto,
    );
  }

  @SubscribeMessage('removeMouseMove')
  remove(@MessageBody() id: number) {
    return this.mouseMovesService.remove(id);
  }
}
