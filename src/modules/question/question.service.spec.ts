import { Test, TestingModule } from '@nestjs/testing';
import { QuestionService } from './question.service';
import { PrismaService } from '../../../prisma/prisma.service';

describe('QuestionService', () => {
  let service: QuestionService;

  const prismaMock = {
    question: { create: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuestionService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get(QuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
