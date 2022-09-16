import { Router } from 'express';
import * as orderController from '../controllers/orders';
import auth from '../middlewares/auth';

const router = Router();

router.get('/orders', orderController.getAllOrders);

router.post('/orders', auth, orderController.createOrder);

export default router;
