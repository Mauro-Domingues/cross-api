export class CreateMigrationIndex {
  public execute(): string {
    return `import 'dotenv/config';
import 'reflect-metadata';
import { Connection, IConnection } ${'from'} './index';

async function mysqlMigrations(connection: IConnection): Promise<void> {
  await connection.mysql.runMigrations();
  return connection.mysql.destroy();
}

(async function runMigrations(): Promise<void> {
  const connection = new Connection(process.argv[2]);
  await connection.connect();

  return mysqlMigrations(connection);
})();
`;
  }
}
