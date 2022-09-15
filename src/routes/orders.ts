import { Router } from 'express';
import orderController from '../controllers/orders';

const router = Router();

router.get('/orders', orderController.getAllOrders);

export default router;
