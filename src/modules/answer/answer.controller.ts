import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  create(@Body() dto: CreateAnswerDto) {
    return this.answerService.create(dto);
  }

  @Patch(':id/approve')
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.approveAnswer(id);
  }

  @Patch(':id/hide')
  hide(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.hideAnswer(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.deleteAnswer(id);
  }
}
