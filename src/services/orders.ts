import { IReturnOrders } from '../interfaces/returnService';
import orderModel from '../models/order';
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

export default { getAllOrders };
