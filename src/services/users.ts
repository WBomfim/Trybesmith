import { IReturnUsers } from '../interfaces/returnService';
import userModel from '../models/user';
import User from '../interfaces/user';
import generateToken from '../helpers/generateToken';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/userMessages';
import validateUserInfos from '../schemas/validateUserInfos';
import IReturnValidations from '../interfaces/returnValidations';

const createUser = async (user: User): Promise<IReturnUsers> => {
  const { username, classe, level, password } = user;
  const validate = validateUserInfos({ username, classe, level, password });
  const { error } = validate as IReturnValidations;
  if (error) return error;
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
