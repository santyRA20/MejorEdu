import { ApiProperty } from '@nestjs/swagger';

export class CreatePresentationDto {
  @ApiProperty({ example: 'Mi presentación', description: 'Título visible' })
  title: string;

  @ApiProperty({ example: 'Lo que trata le presentación', description: 'Cuerpo de la presentación' })
  content: string;

  @ApiProperty({ example: 1, description: 'ID del usuario autor' })
  userId: number;
}
/**
 * Entrada de title, content y userId.
 */