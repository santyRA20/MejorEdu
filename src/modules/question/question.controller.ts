import { Body, Controller, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() dto: CreateQuestionDto) {
    return this.questionService.create(dto);
  }
}
