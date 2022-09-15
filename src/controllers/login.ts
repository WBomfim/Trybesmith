import { Request, Response } from 'express';
import loginService from '../services/login';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const { code, data, error } = await loginService.login({ username, password });
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

export default { login };
