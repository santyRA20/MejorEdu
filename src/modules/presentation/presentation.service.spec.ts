import { Test, TestingModule } from '@nestjs/testing';
import { PresentationService } from './presentation.service';
import { PrismaService } from '../../../prisma/prisma.service';

describe('PresentationService', () => {
  let service: PresentationService;

  const prismaMock = {
    presentation: { create: jest.fn(), findMany: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PresentationService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get(PresentationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
