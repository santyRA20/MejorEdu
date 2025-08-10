import { Test, TestingModule } from '@nestjs/testing';
import { PresentationController } from './presentation.controller';
import { PresentationService } from './presentation.service';

describe('PresentationController', () => {
  let controller: PresentationController;

  const serviceMock = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentationController],
      providers: [{ provide: PresentationService, useValue: serviceMock }],
    }).compile();

    controller = module.get(PresentationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
