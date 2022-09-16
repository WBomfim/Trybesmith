import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const { code, data, error } = await productsService.createProduct({ name, amount });
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};

export const getAllProducts = async (_req: Request, res: Response) => {
  const { code, data, error } = await productsService.getAllProducts();
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
};
