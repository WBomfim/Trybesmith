import { Router } from 'express';
import * as productsController from '../controllers/products';

const router = Router();

router.post('/products', productsController.createProduct);

router.get('/products', productsController.getAllProducts);

export default router;
