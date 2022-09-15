import { IReturnUsers } from '../interfaces/returnService';
import userModel from '../models/user';
import User from '../interfaces/user';
import generateToken from '../helpers/generateToken';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/userMessages';

const createUser = async (user: User): Promise<IReturnUsers> => {
  const { username, classe, level, password } = user;
  const newUser = await userModel.createUser({ username, classe, level, password });
  if (!newUser) {
    return { 
      code: StatusHttp.NOT_IMPLEMENTED,
      error: { message: Messages.NOT_CREATED },
    };
  }
  const token = generateToken(newUser);
  return { code: StatusHttp.CREATED, data: { token } };
};

export default { createUser };
