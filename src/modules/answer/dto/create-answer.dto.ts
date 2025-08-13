import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({ example: 12, description: 'ID de la pregunta' })
  questionId: number;

  @ApiProperty({
    example: 'Mi respuesta en texto',
    description: 'Respuesta en texto (opcional)',
    required: false,
    nullable: true,
  })
  textAnswer?: string | null;

  @ApiProperty({
    example: 4,
    description: 'Respuesta tipo escala (opcional, ej. 1-5)',
    required: false,
    nullable: true,
    minimum: 1,
    maximum: 5,
  })
  scaleAnswer?: number | null;
}
/**
 * Entrade de questionId, y opcionalmente textAnswer o scaleAnswer.
 */
