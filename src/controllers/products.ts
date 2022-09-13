import { Request, Response } from 'express';
import * as productsService from '../services/products';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const product = await productsService.createProduct(name, amount);
  return res.status(product.code).json(product.data);
};

const getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAllProducts();
  return res.status(products.code).json(products.data);
};

export {
  createProduct,
  getAllProducts,
};
