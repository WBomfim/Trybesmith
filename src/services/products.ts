import * as productModel from '../models/product';
import { IReturnProducts, IReturnProduct } from '../interfaces/returnService';
import Product from '../interfaces/product';

export const createProduct = async (product: Product): Promise<IReturnProduct> => {
  const { name, amount } = product;
  const newProduct = await productModel.createProduct({ name, amount });
  if (!newProduct) return { code: 501, error: { message: 'Product not created' } };
  return { code: 201, data: newProduct };
};

export const getAllProducts = async (): Promise<IReturnProducts> => {
  const products = await productModel.getAllProducts();
  if (!products) return { code: 404, error: { message: 'Products not found' } };
  return { code: 200, data: products };
};
