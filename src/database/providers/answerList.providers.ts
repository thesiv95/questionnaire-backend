import { DB_PROVIDERS } from 'src/consts/dbConsts';
import { AnswerListModel } from '../models/answerList.model';

const answersListProviders = [
  {
    provide: DB_PROVIDERS.AnswersList,
    useValue: AnswerListModel,
  },
];

export default answersListProviders;