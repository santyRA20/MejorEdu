import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiBody} from '@nestjs/swagger';
import { CreatePresentationDto } from './dto/create-presentation.dto';
import { PresentationService } from './presentation.service';
import { PresentationEntity } from './entities/presentation.entity';

@ApiTags('Presentations')
@Controller('presentation')
export class PresentationController {
  constructor(private readonly presentationService: PresentationService) {}
  /**
   * POST de /presentation con uso de @ApiBody(CreatePresentationDto) 
   * y @ApiCreatedResponse(PresentationEntity).
   */

  @Post()
  @ApiOperation({ summary: 'Crear una presentación' })
  @ApiBody({ type: CreatePresentationDto })
  @ApiCreatedResponse({ type: PresentationEntity })
  @ApiBadRequestResponse({ description: 'Datos inválidos o error al crear' })
  create(@Body() dto: CreatePresentationDto) {
    return this.presentationService.create(dto);
  }
}
