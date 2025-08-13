import { ApiProperty } from '@nestjs/swagger';

/**
 * GET con salida de username y email.
 */
export class UserProfileEntity {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin@mail.com', nullable: true })
  email?: string;
}
