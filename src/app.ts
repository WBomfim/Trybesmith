import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import productsRouter from './routes/products';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use(handleErrors);

export default app;
