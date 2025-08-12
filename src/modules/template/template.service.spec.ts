import { Test, TestingModule } from '@nestjs/testing';
import { TemplateService } from './template.service';
import { PrismaService } from '../../../prisma/prisma.service';

describe('TemplateService', () => {
  let service: TemplateService;

  const prismaMock = {
    template: {
      findMany: jest.fn(),
      count: jest.fn(),
      createMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TemplateService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get(TemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
