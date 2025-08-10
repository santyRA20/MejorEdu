import { Test, TestingModule } from '@nestjs/testing';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

describe('QuestionController', () => {
  let controller: QuestionController;

  const serviceMock = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionController],
      providers: [{ provide: QuestionService, useValue: serviceMock }],
    }).compile();

    controller = module.get(QuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create -> llama al servicio y regresa su resultado', async () => {
    const dto = {
      text: '¿Capital de México?',
      presentationId: 1,
      options: [
        { text: 'CDMX', correct: true },
        { text: 'Guadalajara', correct: false },
      ],
    };
    const expected = { id: 1, ...dto, options: [{ id: 11 }, { id: 12 }] };

    serviceMock.create.mockResolvedValueOnce(expected);

    const res = await controller.create(dto as any);
    expect(serviceMock.create).toHaveBeenCalledWith(dto);
    expect(res).toEqual(expected);
  });
});
