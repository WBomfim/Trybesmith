import { Request, Response } from 'express';
import usersService from '../services/users';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const { code, data, error } = await usersService
    .createUser({ username, classe, level, password });
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

export default { createUser };
