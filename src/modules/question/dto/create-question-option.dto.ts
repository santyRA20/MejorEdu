import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionOptionDto {
  /**
   * Entrada de text y correct.
   */
  @ApiProperty({ example: 'París', description: 'Texto de la opción' })
  text: string;

  @ApiProperty({ example: true, description: 'Indica si la opción es correcta' })
  correct: boolean;
}
