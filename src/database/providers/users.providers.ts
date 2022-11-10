import { DB_PROVIDERS } from 'src/consts/dbConsts';
import { UserModel } from '../models/user.model';

const usersProviders = [
  {
    provide: DB_PROVIDERS.Users,
    useValue: UserModel,
  },
];

export default usersProviders;