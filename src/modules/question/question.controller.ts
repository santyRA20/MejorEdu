import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiBody} from '@nestjs/swagger';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionEntity } from './entities/question.entity';

@ApiTags('Questions')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  //POST /question documentado con Swagger. 
  @Post()
  @ApiOperation({ summary: 'Crear una pregunta con sus opciones' })
  @ApiBody({ type: CreateQuestionDto })
  @ApiCreatedResponse({ type: QuestionEntity })
  @ApiBadRequestResponse({ description: 'Datos inválidos o presentación inexistente' })
  create(@Body() dto: CreateQuestionDto) {
    return this.questionService.create(dto);
  }
}
