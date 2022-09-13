import * as productModel from '../models/product';
import ReturnService from '../interfaces/returnService';

const createProduct = async (name: string, amount: string): Promise<ReturnService> => {
  const product = await productModel.createProduct(name, amount);
  return { code: 201, data: product };
};

const getAllProducts = async (): Promise<ReturnService> => {
  const products = await productModel.getAllProducts();
  return { code: 200, data: products };
};

export {
  createProduct,
  getAllProducts,
};
