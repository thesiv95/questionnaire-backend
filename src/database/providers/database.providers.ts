
import { Sequelize } from 'sequelize-typescript';
import { DB_NAME } from '../../consts/dbConsts';
import { AnswerListModel } from '../models/answerList.model';
import { QuestionModel } from '../models/question.model';
import { UserModel } from '../models/user.model';
import { UserAnswersModel } from '../models/userAnswers.model';

const modelsList = [
    AnswerListModel,
    QuestionModel,
    UserAnswersModel,
    UserModel
];

// DB initialization
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: DB_NAME,
      });
      sequelize.addModels(modelsList);
      await sequelize.sync();
      return sequelize;
    },
  },
];