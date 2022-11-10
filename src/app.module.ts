import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import answersListProviders from './database/providers/answerList.providers';
import questionsProviders from './database/providers/question.providers';
import usersProviders from './database/providers/users.providers';
import userAnswersProviders from './database/providers/userAnswers.providers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...answersListProviders,
    ...questionsProviders,
    ...usersProviders,
    ...userAnswersProviders
  ],
})
export class AppModule {}
