import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

const answerSelect = {
  id: true,
  questionId: true,
  textAnswer: true,
  scaleAnswer: true,
  status: true,
  createdAt: true,
  updatedAt: true,
};

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}
  //Select para que todas las respuestas tengan el mismo formato.
  async create(dto: CreateAnswerDto) {
    return this.prisma.answer.create({
      data: {
        questionId: dto.questionId,
        textAnswer: dto.textAnswer ?? null,
        scaleAnswer: dto.scaleAnswer ?? null,
      },
      select: answerSelect,
    });
  }

  async approveAnswer(id: number) {
    return this.prisma.answer.update({
      where: { id },
      data: { status: 'APPROVED' },
      select: answerSelect,
    });
  }

  async hideAnswer(id: number) {
    return this.prisma.answer.update({
      where: { id },
      data: { status: 'HIDDEN' },
      select: answerSelect,
    });
  }

  async deleteAnswer(id: number) {
    // Prisma retorna el registro borrado; lo limitamos al shape público
    return this.prisma.answer.delete({
      where: { id },
      select: answerSelect,
    });
  }
}
