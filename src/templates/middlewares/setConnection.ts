export class CreateSetConnection {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { Connection } ${'from'} '@shared/typeorm';

const getClient = (client?: string): string => {
  if (process.env.NODE_ENV === 'test') return 'database_test';
  if (client) return client;
  return process.env.DB_DATABASE;
};

/**
 * @description Defaults to the process.env database, but supports multi-tenancy
 */
export const setConnection = async (
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> => {
  Connection.client = getClient(request.headers['tenant-id'] as string);
  Connection.mysql = MysqlDataSource(Connection.client);

  if (!Connection.mysql.isInitialized) {
    await Connection.mysql.initialize();
  }

  return next();
};
`;
  }
}
