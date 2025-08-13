import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse, ApiUnauthorizedResponse, ApiBearerAuth} from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UserEntity } from './entities/user.entity';
import { UserProfileEntity } from './entities/user-profile.entity';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * El /users, es público (solo muestra los campos seguros)
   * y /users/profile, esta protegido con JWT (@ApiBearerAuth()). 
   * Ambos con anotaciones Swagger (@ApiOperation, @ApiOkResponse).
   */
  @Get()
  @ApiOperation({ summary: 'Listar usuarios' })
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener perfil del usuario autenticado' })
  @ApiOkResponse({ type: UserProfileEntity })
  @ApiUnauthorizedResponse({ description: 'Sin token o token inválido' })
  async getProfile(@Req() req): Promise<UserProfileEntity> {
    return { email: req.user.email, username: req.user.username };
  }
}
