import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'admin' })
  password: string;
}
/**
 * ejemplo de usuario para iniciar sesion
 */