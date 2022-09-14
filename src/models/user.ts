import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/user';

const createUser = async (user: User): Promise<User | null> => {
  const { username, classe, level, password } = user;
  const query = (
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES ( ?, ?, ?, ? )'
  );
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  if (!insertId) return null;
  return { id: insertId, username, classe, level };
};

export default { createUser };
