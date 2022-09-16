import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/user';

const login = async (user: IUser) : Promise<IUser | null> => {
  const { username, password } = user;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [[row]] = await connection.execute<RowDataPacket[]>(query, [username, password]);
  if (!row) return null;
  return row as unknown as IUser;
};

export default { login };
