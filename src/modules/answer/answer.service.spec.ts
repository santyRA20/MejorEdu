import { Test, TestingModule } from '@nestjs/testing';
import { AnswerService } from './answer.service';
import { PrismaService } from '../../../prisma/prisma.service';

describe('AnswerService', () => {
  let service: AnswerService;

  const prismaMock = {
    answer: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnswerService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get(AnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
