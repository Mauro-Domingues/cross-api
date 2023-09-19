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
  const tenant_id =
    (request.headers['tenant-id'] as string) ?? process.env.DB_DATABASE;

  Connection.mysql = MysqlDataSource(
    process.env.NODE_ENV === 'test' ? 'database_test' : tenant_id,
  );

  if (!Connection.mysql.isInitialized) {
    await Connection.mysql.initialize();
  }

  return next();
};
`;
  }
}
