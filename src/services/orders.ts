import { IReturnOrders } from '../interfaces/returnService';
import orderModel from '../models/order';
import * as oderProduct from '../models/product';
import StatusHttp from '../types/statusHttp';
import Messages from '../types/orderMessages';

const getAllOrders = async (): Promise<IReturnOrders> => {
  const orders = await orderModel.getAllOrders();
  if (!orders) {
    return {
      code: StatusHttp.NOT_FOUND,
      error: { message: Messages.NOT_FOUND },
    };
  }
  return { code: StatusHttp.OK, data: orders };
};

const createOrder = async (userId: number, productsIds: number[]): Promise<IReturnOrders> => {
  const orderId = await orderModel.createOrder(userId);
  await Promise.all(
    productsIds.map((productId) => oderProduct.updateProductOrder(productId, orderId)),
  );
  return { code: StatusHttp.CREATED, data: { userId, productsIds } };
};

export default { 
  getAllOrders,
  createOrder,
};
