import { ApiProperty } from '@nestjs/swagger';
import { QuestionOptionEntity } from './question-option.entity';

export class QuestionEntity {
  /**
   * Salida de id, text, presentationId y options[].
   */
  @ApiProperty({ example: 42 })
  id: number;

  @ApiProperty({ example: '¿Cuál es la capital de Francia?' })
  text: string;

  @ApiProperty({ example: 7 })
  presentationId: number;

  @ApiProperty({ type: [QuestionOptionEntity] })
  options: QuestionOptionEntity[];
}
