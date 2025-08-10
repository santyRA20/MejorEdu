import { Test, TestingModule } from '@nestjs/testing';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';

describe('AnswerController', () => {
  let controller: AnswerController;

  const serviceMock = {
    create: jest.fn(),
    approveAnswer: jest.fn(),
    hideAnswer: jest.fn(),
    deleteAnswer: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerController],
      providers: [{ provide: AnswerService, useValue: serviceMock }],
    }).compile();

    controller = module.get(AnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
