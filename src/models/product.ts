import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product';
import connection from './connection';

export const createProduct = async (product: Product) : Promise<Product | null> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES ( ?, ? )';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  if (!insertId) return null;
  return { id: insertId, name, amount };
};

export const getAllProducts = async () : Promise<Product[] | null> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [data] = await connection.execute(query);
  if (!data) return null;
  return data as Product[];
};

export const updateProductOrder = async (id: number, orderId: number) : Promise<true> => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  await connection.execute(query, [orderId, id]);
  return true;
};
