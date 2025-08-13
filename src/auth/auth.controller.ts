import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthTokens } from './entities/auth-tokens.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** implementacion y uso de @ApiTags('Auth'), @ApiOperation, @ApiBody(LoginDto), @ApiOkResponse(AuthTokens). */
  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Autenticar y obtener JWT' })
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ type: AuthTokens })
  @ApiBadRequestResponse({ description: 'Credenciales inválidas o formato incorrecto' })
  async login(@Body() dto: LoginDto): Promise<AuthTokens> {
    return this.authService.login(dto);
  }
}
