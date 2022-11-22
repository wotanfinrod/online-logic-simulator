import { PartialType } from '@nestjs/mapped-types';
import { CreateMouseMoveDto } from './create-mouse-move.dto';

export class UpdateMouseMoveDto extends PartialType(CreateMouseMoveDto) {
  id: number;
}
