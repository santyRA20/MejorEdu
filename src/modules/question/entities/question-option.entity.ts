import { ApiProperty } from '@nestjs/swagger';

export class QuestionOptionEntity {
  /**
   * Salida de id, text y correct.
   */
  @ApiProperty({ example: 101 })
  id: number;

  @ApiProperty({ example: 'París' })
  text: string;

  @ApiProperty({ example: true })
  correct: boolean;
}
