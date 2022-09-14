import * as productModel from '../models/product';
import { IReturnProducts, IReturnProduct } from '../interfaces/returnService';
import Product from '../interfaces/product';
import StatusHttp from '../types/statusHttp';

export const createProduct = async (product: Product): Promise<IReturnProduct> => {
  const { name, amount } = product;
  const newProduct = await productModel.createProduct({ name, amount });
  if (!newProduct) {
    return { 
      code: StatusHttp.NOT_IMPLEMENTED,
      error: { message: 'Product not created' },
    };
  }
  return { code: StatusHttp.OK, data: newProduct };
};

export const getAllProducts = async (): Promise<IReturnProducts> => {
  const products = await productModel.getAllProducts();
  if (!products) {
    return { 
      code: StatusHttp.NOT_FOUND, 
      error: { message: 'Products not found' },
    };
  }
  return { code: StatusHttp.OK, data: products };
};
