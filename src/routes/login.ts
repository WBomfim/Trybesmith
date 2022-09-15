import { Router } from 'express';
import loginController from '../controllers/login';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export default loginRouter;
