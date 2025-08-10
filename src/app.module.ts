import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { PrismaModule } from 'prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PresentationModule } from './modules/presentation/presentation.module';
import { TemplateModule } from './modules/template/template.module';
import { QuestionModule } from './modules/question/question.module';
import { AnswerModule } from './modules/answer/answer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UserModule,
    PresentationModule,
    TemplateModule,
    QuestionModule,
    AnswerModule
  ],
  controllers: [AppController],  
  providers: [AppService],        
  /*
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],*/
})
export class AppModule {}