import Product from './product';

interface ReturnService {
  code: number,
  error?: { message: string } | null,
  data?: Product | Product[] | null,
}

export default ReturnService;
