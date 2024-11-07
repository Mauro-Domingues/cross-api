export class CreateSetConnection {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
import { MysqlDataSource } ${'from'} '@shared/typeorm/dataSources/mysqlDataSource';
import { container } ${'from'} 'tsyringe';
import { Connection, IConnection } ${'from'} '@shared/typeorm';

/**
 * @description Defaults to the process.env database, but supports multi-tenancy
 */
export const setConnection = async (
  request: Request,
  _response: Response,
  next: NextFunction,
): Promise<void> => {
  const client =
    (request.headers.tenantId as string) ?? process.env.MYSQL_DATABASE;
  const mysql = MysqlDataSource(client);

  if (!mysql.isInitialized) {
    await mysql.initialize();
  }

  container.register<IConnection>('Connection', {
    useValue: new Connection(client, mysql),
  });

  return next();
};
`;
  }
}
