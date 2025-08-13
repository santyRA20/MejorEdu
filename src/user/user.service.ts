import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Devuelve solo campos públicos (no password o contraseña)
  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      select: { id: true, email: true, createdAt: true },
      orderBy: { id: 'asc' },
    });
  }

  // /users/profile si trae desde DB
  async findByEmail(email: string): Promise<UserEntity | null> {
    if (!email) return null;
    return this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, createdAt: true },
    });
  }
}
