import { Body, Controller, Post, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiParam, ApiBody} from '@nestjs/swagger';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AnswerEntity } from './entities/answer.entity';

@ApiTags('Answers')
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  /**
   * POST /answer = crear.
   * PATCH /answer/:id/approve = aprobar (cambia status).
   * PATCH /answer/:id/hide = ocultar.
   * DELETE /answer/:id = borrar (y devuelve el registro borrado con el shape público).
   * Todos documentados con Swagger (@ApiOperation, @ApiOkResponse, etc.).
   */
  
  @Post()
  @ApiOperation({ summary: 'Crear una respuesta' })
  @ApiBody({ type: CreateAnswerDto })
  @ApiCreatedResponse({ type: AnswerEntity })
  @ApiBadRequestResponse({ description: 'Datos inválidos' })
  create(@Body() dto: CreateAnswerDto) {
    return this.answerService.create(dto);
  }
 
  @Patch(':id/approve')
  @ApiOperation({ summary: 'Aprobar una respuesta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: AnswerEntity })
  @ApiNotFoundResponse({ description: 'Respuesta no encontrada' })
  approve(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.approveAnswer(id);
  }

  @Patch(':id/hide')
  @ApiOperation({ summary: 'Ocultar una respuesta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: AnswerEntity })
  @ApiNotFoundResponse({ description: 'Respuesta no encontrada' })
  hide(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.hideAnswer(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una respuesta' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: AnswerEntity })
  @ApiNotFoundResponse({ description: 'Respuesta no encontrada' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.deleteAnswer(id);
  }
}
