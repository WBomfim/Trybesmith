import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product';
import connection from './connection';

export const createProduct = async (name: string, amount: string): Promise<Product | null> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES ( ?, ? )';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  if (!insertId) return null;
  return { id: insertId, name, amount };
};

export const getAllProducts = async (): Promise<Product[] | null> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [data] = await connection.execute(query);
  if (!data) return null;
  return data as Product[];
};
