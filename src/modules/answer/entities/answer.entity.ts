import { ApiProperty } from '@nestjs/swagger';

export class AnswerEntity {
  @ApiProperty({ example: 101 })
  id: number;

  @ApiProperty({ example: 12 })
  questionId: number;

  @ApiProperty({ example: 'Mi respuesta en texto', nullable: true })
  textAnswer?: string | null;

  @ApiProperty({ example: 4, nullable: true })
  scaleAnswer?: number | null;

  @ApiProperty({
    example: 'PENDING',
    enum: ['PENDING', 'APPROVED', 'HIDDEN'],
    description: 'Estatus de moderación',
  })
  status: 'PENDING' | 'APPROVED' | 'HIDDEN';

  @ApiProperty({ example: '2025-08-12T20:00:00.000Z' })
  createdAt: Date;
}
/**
 * Salida de id, questionId, textAnswer, scaleAnswer, status (PENDING/APPROVED/HIDDEN) y createdAt.
 */