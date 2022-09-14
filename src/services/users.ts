import { IReturnUsers } from '../interfaces/returnService';
import userModel from '../models/user';
import User from '../interfaces/user';
import generateToken from '../helpers/generateToken';
import statusHttp from '../types/statusHttp';

const createUser = async (user: User): Promise<IReturnUsers> => {
  const { username, classe, level, password } = user;
  const newUser = await userModel.createUser({ username, classe, level, password });
  if (!newUser) {
    return { 
      code: statusHttp.NOT_IMPLEMENTED,
      error: { message: 'Erro ao criar usuário' }
    };
  }
  const token = generateToken(newUser);
  return { code: statusHttp.CREATED, data: token };
};

export default { createUser };
