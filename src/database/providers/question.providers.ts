import { DB_PROVIDERS } from 'src/consts/dbConsts';
import { QuestionModel } from '../models/question.model';

const questionsProviders = [
  {
    provide: DB_PROVIDERS.Questions,
    useValue: QuestionModel,
  },
];

export default questionsProviders;