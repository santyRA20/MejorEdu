import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePresentationDto } from './dto/create-presentation.dto';

@Injectable()
export class PresentationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePresentationDto) {
  try {
    return await this.prisma.presentation.create({
      data: {
        title: data.title,
        content: data.content,
        user: {
          connect: { id: data.userId },
        },
      },
    });
  } catch (error) {
    console.error('❌ Error al crear presentación:', error);
    throw error;
  }
}
}
