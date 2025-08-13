import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  /**
   * Se crea la pregunta y sus opciones en un solo paso.
   * Uso de select para controlar exactamente lo que respondemos.
   */
  async create(dto: CreateQuestionDto) {
    return this.prisma.question.create({
      data: {
        text: dto.text,
        presentation: { connect: { id: dto.presentationId } },
        options: {
          create: dto.options.map((opt) => ({
            text: opt.text,
            correct: opt.correct,
          })),
        },
      },
      select: {
        id: true,
        text: true,
        presentationId: true,
        options: {
          select: {
            id: true,
            text: true,
            correct: true,
          },
          orderBy: { id: 'asc' },
        },
      },
    });
  }
}
