import { ApiProperty } from '@nestjs/swagger';

export class PresentationEntity {
  /**
   * Salida de id, title, content, userId y createdAt.
   */
  @ApiProperty({ example: 42 })
  id: number;

  @ApiProperty({ example: 'Mi presentación' })
  title: string;

  @ApiProperty({ example: 'Lo que trata le presentación' })
  content: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '2025-08-12T20:00:00.000Z' })
  createdAt: Date;

}
