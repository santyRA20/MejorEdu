import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { AuthTokens } from './entities/auth-tokens.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(dto: LoginDto): Promise<AuthTokens> {
    const { username, password } = dto;

    // Validación
    if (username !== 'admin' || password !== 'admin') {
      throw new UnauthorizedException();
    }

    /**
     * Se genera el token y regresa en formato de AuthTokens.
     */
    const payload = { username };
    const access_token = this.jwtService.sign(payload);

    const expiresIn = 3600;

    return {
      access_token,
      tokenType: 'Bearer',
      expiresIn,
    };
  }
}
