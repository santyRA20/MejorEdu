import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionOptionDto } from './create-question-option.dto';

export class CreateQuestionDto {
  /**
   * Entrada de text, presentationId y options: [].
   */
  @ApiProperty({ example: '¿Cuál es la capital de Francia?' })
  text: string;

  @ApiProperty({ example: 7, description: 'ID de la presentación a la que pertenece' })
  presentationId: number;

  @ApiProperty({
    type: [CreateQuestionOptionDto],
    description: 'Arreglo de opciones para la pregunta (al menos una)',
    example: [
      { text: 'París', correct: true },
      { text: 'Lyon', correct: false },
      { text: 'Marsella', correct: false },
    ],
  })
  options: CreateQuestionOptionDto[];
}
