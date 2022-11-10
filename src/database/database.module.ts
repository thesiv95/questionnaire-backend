import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';
import answersListProviders from './providers/answerList.providers';
import questionsProviders from './providers/question.providers';
import userAnswersProviders from './providers/userAnswers.providers';
import usersProviders from './providers/users.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...answersListProviders,
    ...questionsProviders,
    ...userAnswersProviders,
    ...usersProviders
],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
