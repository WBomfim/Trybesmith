import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/order';

export const getAllOrders = async () : Promise<IOrder[] | null> => {
  const query = (
    `SELECT Od.id, Od.userId, JSON_ARRAYAGG(Pd.id) AS productsIds
    FROM Trybesmith.Orders AS Od
    JOIN Trybesmith.Products AS Pd ON Pd.orderId = Od.id
    GROUP BY Od.id
    ORDER BY Od.userId;`
  );
  const [data] = await connection.execute(query);
  if (!data) return null;
  return data as IOrder[];
};

export const createOrder = async (userId: number) : Promise<number> => {
  const query = (
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?);'
  );
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);
  return insertId;
};
