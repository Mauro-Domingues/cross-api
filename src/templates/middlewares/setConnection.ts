export class CreateSetConnection {
  public execute(): string {
    return `import { Request, Response, NextFunction } ${'from'} 'express';
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
  const client = request.headers['tenant-id'] as string;

  const connection = new Connection(client);

  await connection.connect();

  container.register<IConnection>('Connection', {
    useValue: connection,
  });

  return next();
};
`;
  }
}
