import { Request, Response } from 'express';
import orderService from '../services/orders';

const getAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const { code, error, data } = await orderService.getAllOrders();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

export default { getAllOrders };
