import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import ordersRouter from './routes/orders';

const app = express();

app.use(express.json());

app.use(usersRouter);

app.use(productsRouter);

app.use(ordersRouter);

app.use(handleErrors);

export default app;
