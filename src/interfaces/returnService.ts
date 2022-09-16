import IProduct from './product';
import IOrder from './order';

export interface IReturnProducts {
  code: number,
  error?: { message: string },
  data?: IProduct[] | IProduct,
}

export interface IReturnUsers {
  code: number,
  error?: { message: string },
  data?: { token: string },
}

export interface IReturnOrders {
  code: number,
  error?: { message: string },
  data?: IOrder[] | IOrder,
}
