import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('MejorEdu')
    .setDescription('Proyecto de MejorEdu')
    .setVersion('1.0')
    .addTag('MejorEdu')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  //await app.listen(configService.get('PORT') || 3000);
  await app.listen(process.env.PORT || 3000);

}
bootstrap();