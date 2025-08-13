import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TemplateService {
  constructor(private prisma: PrismaService) {
    this.seedTemplates();
  }
  //Se crea seedTemplates() para insertar 2 plantillas si la tabla está vacía.
  private async seedTemplates() {
    const count = await this.prisma.template.count();
    if (count === 0) {
      await this.prisma.template.createMany({
        data: [
          {
            name: 'Plantilla Azul',
            description: 'Diseño moderno en tonos azules',
            content:
              '<div style="background-color:#e0f7fa;padding:20px;"><h1>Título</h1><p>Contenido</p></div>',
          },
          {
            name: 'Plantilla Clásica',
            description: 'Diseño simple con bordes grises',
            content:
              '<div style="border:1px solid #ccc;padding:20px;"><h1>Título</h1><p>Contenido</p></div>',
          },
        ],
      });
    }
  }

  //Uso de select y orderBy
  async findAll() {
    return this.prisma.template.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        content: true,
      },
      orderBy: { id: 'asc' },
    });
  }
}
