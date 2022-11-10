import { DB_PROVIDERS } from 'src/consts/dbConsts';
import { UserAnswersModel } from '../models/userAnswers.model';

const userAnswersProviders = [
  {
    provide: DB_PROVIDERS.UserAnswers,
    useValue: UserAnswersModel,
  },
];

export default userAnswersProviders;