import { ApiProperty } from '@nestjs/swagger';
/**
 * Salida con GET dando el id, email y createdAt.
 */
export class UserEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'user@mail.com' })
  email: string;

  @ApiProperty({ example: '2025-08-01T12:34:56.000Z' })
  createdAt: Date;
}
