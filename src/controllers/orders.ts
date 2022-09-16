import { Request, Response } from 'express';
import orderService from '../services/orders';

export const getAllOrders = async (_req: Request, res: Response) => {
  const { code, error, data } = await orderService.getAllOrders();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

export const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  const { code, error, data } = await orderService.createOrder(id, productsIds);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};
