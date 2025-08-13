import { ApiProperty } from '@nestjs/swagger';

export class AuthTokens {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;

  @ApiProperty({ example: 'Bearer' })
  tokenType: string;

  @ApiProperty({ example: 3600, description: 'Segundos hasta expirar' })
  expiresIn: number;
}
/**
 * ejemplo de respuesta al iniciar sesion
 */