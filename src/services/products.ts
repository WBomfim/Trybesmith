import * as productModel from '../models/product';
import { IReturnProducts, IReturnProduct } from '../interfaces/returnService';
import Product from '../interfaces/product';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/productMessages';
import validateProductInfo from '../schemas/validateProductInfo';
import IReturnValidations from '../interfaces/returnValidations';

export const createProduct = async (product: Product): Promise<IReturnProduct> => {
  const { name, amount } = product;
  const validation = validateProductInfo({ name, amount });
  const { error } = validation as IReturnValidations;
  if (error) return error;
  const newProduct = await productModel.createProduct({ name, amount });
  if (!newProduct) {
    return { 
      code: StatusHttp.NOT_IMPLEMENTED,
      error: { message: Messages.NOT_CREATED },
    };
  }
  return { code: StatusHttp.CREATED, data: newProduct };
};

export const getAllProducts = async (): Promise<IReturnProducts> => {
  const products = await productModel.getAllProducts();
  if (!products) {
    return { 
      code: StatusHttp.NOT_FOUND, 
      error: { message: Messages.NOT_FOUND },
    };
  }
  return { code: StatusHttp.OK, data: products };
};
