import { Injectable } from '@nestjs/common';
import { CreateMouseMoveDto } from './dto/create-mouse-move.dto';
import { UpdateMouseMoveDto } from './dto/update-mouse-move.dto';

@Injectable()
export class MouseMovesService {
  create(createMouseMoveDto: CreateMouseMoveDto) {
    return 'This action adds a new mouseMove';
  }

  findAll() {
    return `This action returns all mouseMoves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mouseMove`;
  }

  update(id: number, updateMouseMoveDto: UpdateMouseMoveDto) {
    return `This action updates a #${id} mouseMove`;
  }

  remove(id: number) {
    return `This action removes a #${id} mouseMove`;
  }
}
