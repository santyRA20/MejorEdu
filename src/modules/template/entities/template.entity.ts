import { ApiProperty } from '@nestjs/swagger';

export class TemplateEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Plantilla Azul' })
  name: string;

  @ApiProperty({ example: 'Diseño moderno en tonos azules' })
  description: string;

  @ApiProperty({
    example: '<div style="..."><h1>Título</h1><p>Contenido</p></div>',
    description: 'HTML base del template',
  })
  content: string;
}
/**
 * Datos de salida: id, name, description, content.
 */