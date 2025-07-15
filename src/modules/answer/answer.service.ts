import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAnswerDto) {
    return this.prisma.answer.create({
      data: {
        questionId: dto.questionId,
        textAnswer: dto.textAnswer,
        scaleAnswer: dto.scaleAnswer,
      },
    });
  }
  async approveAnswer(id: number) {
    return this.prisma.answer.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
  }

  async hideAnswer(id: number) {
    return this.prisma.answer.update({
      where: { id },
      data: { status: 'HIDDEN' },
    });
  }

  async deleteAnswer(id: number) {
    return this.prisma.answer.delete({
      where: { id },
    });
  }

  
}
