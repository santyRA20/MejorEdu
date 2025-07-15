import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

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
      include: { options: true },
    });
  }
}
