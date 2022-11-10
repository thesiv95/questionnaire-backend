import { Inject, Injectable } from '@nestjs/common';
import { DB_PROVIDERS } from './consts/dbConsts';
import { QuestionModel } from './database/models/question.model';
import { AnswerListModel } from './database/models/answerList.model';
import { UserModel } from './database/models/user.model';
import { UserAnswersModel } from './database/models/userAnswers.model';
import * as MockData from './utils/mockData';
import CreateNewAnswerDto from './dtos/createNewAnswer.dto';
import validateUserAnswers from './utils/validateUserAnswers';

@Injectable()
export class AppService {

  constructor(
    @Inject(DB_PROVIDERS.AnswersList)
    private answersListInstance: typeof AnswerListModel,
    @Inject(DB_PROVIDERS.Questions)
    private questionsInstance: typeof QuestionModel,
    @Inject(DB_PROVIDERS.Users)
    private usersInstance: typeof UserModel,
    @Inject(DB_PROVIDERS.UserAnswers)
    private userAnswersInstance: typeof UserAnswersModel
  ) { }

  async getQuestions() {
    try {
      this.questionsInstance.hasOne(this.answersListInstance);
      this.answersListInstance.belongsTo(this.questionsInstance);
      return this.questionsInstance.findAll({
        include: {
          model: AnswerListModel,
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUserAnswer(createUserAnswerDto: CreateNewAnswerDto): Promise<UserAnswersModel> {
    try {
      if (!validateUserAnswers(createUserAnswerDto)) {
        // Do not write which fields exactly, for security
        throw new Error('Please specify required fields');
      }
      return this.userAnswersInstance.create(createUserAnswerDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async dbInit() {
    try {
      await Promise.all([
        this.answersListInstance.bulkCreate(MockData.answers),
        this.questionsInstance.bulkCreate(MockData.questions),
        this.usersInstance.bulkCreate(MockData.users),
        this.userAnswersInstance.bulkCreate(MockData.userAnswers)
      ]);
      return { dbInit: 'success' };
    } catch (error) {
      throw new Error(error);
    }
  }

  healthcheck(): string {
    return 'HEALTHCHECK ok';
  }
}
