import { sign } from 'jsonwebtoken';
import IUser from '../interfaces/user';

const SECRTET_KEY = 'minhaSenhaSuperSecreta';

export default (user: IUser): string => {
  const { id, username, classe } = user;

  const payload = {
    id,
    username,
    classe,
  };

  const config = {
    expiresIn: '1d',
  };

  const token = sign(payload, SECRTET_KEY, config);

  return token;
};
