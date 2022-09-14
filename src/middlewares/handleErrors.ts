import { Request, Response, NextFunction } from 'express';
import StatusHttp from '../types/statusHttp';

export default (_err: Error, _req: Request, res: Response, _next: NextFunction) => res
  .status(StatusHttp.INTERNAL_ERROR)
  .json({ message: 'Internal Server Error' });
