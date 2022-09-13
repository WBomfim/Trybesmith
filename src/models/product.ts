import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product';
import connection from './connection';

const creatProduct = async (name: string, amount: string): Promise<Product> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES ( ?, ? )';
  const result = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount };
};

const getAllProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const result = await connection.execute(query);
  const [data] = result;
  return data as Product[];
};

export {
  creatProduct,
  getAllProducts,
};
