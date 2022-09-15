import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/generalMessages';

const SECRTET_KEY = 'minhaSenhaSuperSecreta';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusHttp.UNAUTHORIZED)
      .json({ message: Messages.TOKEN_NOT_FOUND });
  }

  try {
    const decoded = verify(token, SECRTET_KEY);
    req.body.user = decoded;
    next();
  } catch (err) {
    return res.status(StatusHttp.UNAUTHORIZED)
      .json({ message: Messages.UNAUTHORIZED });
  }
};

export default auth;
