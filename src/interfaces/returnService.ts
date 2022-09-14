import IProduct from './product';

export interface IReturnProduct {
  code: number,
  error?: { message: string },
  data?: IProduct,
}

export interface IReturnProducts {
  code: number,
  error?: { message: string },
  data?: IProduct[],
}
