import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { TemplateService } from './template.service';
import { TemplateEntity } from './entities/template.entity';

@ApiTags('Templates')
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}
//GET /template con @ApiOkResponse(TemplateEntity, { isArray: true }).
  @Get()
  @ApiOperation({ summary: 'Listar todas las plantillas disponibles' })
  @ApiOkResponse({ type: TemplateEntity, isArray: true })
  findAll() {
    return this.templateService.findAll();
  }
}
