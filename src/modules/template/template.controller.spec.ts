import { Test, TestingModule } from '@nestjs/testing';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';

describe('TemplateController', () => {
  let controller: TemplateController;

  const serviceMock = {
    findAll: jest.fn(),
    seedTemplates: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplateController],
      providers: [{ provide: TemplateService, useValue: serviceMock }],
    }).compile();

    controller = module.get(TemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
