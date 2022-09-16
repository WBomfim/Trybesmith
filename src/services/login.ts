import { IReturnUsers } from '../interfaces/returnService';
import loginModel from '../models/login';
import IUser from '../interfaces/user';
import validateLoginInfos from '../schemas/validateLoginInfos';
import ReturnValidations from '../interfaces/returnValidations';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/userMessages';
import generateToken from '../helpers/generateToken';

const login = async (user: IUser): Promise<IReturnUsers> => {
  const { username, password } = user;
  const validate = validateLoginInfos({ username, password });
  const { error } = validate as ReturnValidations;
  if (error) return error;
  const userResult = await loginModel.login({ username, password });
  if (!userResult) {
    return {
      code: StatusHttp.UNAUTHORIZED,
      error: { message: Messages.PASS_OR_USER_INVALID },
    };
  }
  const token = generateToken(userResult);
  return { code: StatusHttp.OK, data: { token } };
};

export default { login };
