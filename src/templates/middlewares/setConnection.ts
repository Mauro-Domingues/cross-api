export class CreateSetConnection {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { Connection } ${'from'} '@shared/typeorm';

/**
 * @description Defaults to the process.env database, but supports multi-tenancy
 */
export const setConnection = async (
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> => {
  Connection.client =
    (request.headers['tenant-id'] as string) ?? process.env.MYSQL_DATABASE;
  Connection.mysql = MysqlDataSource(Connection.client);

  if (!Connection.mysql.isInitialized) {
    await Connection.mysql.initialize();
  }

  return next();
};
`;
  }
}
