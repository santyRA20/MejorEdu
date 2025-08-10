import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    return { email: req.user.email, username: req.user.username};
  }
}
