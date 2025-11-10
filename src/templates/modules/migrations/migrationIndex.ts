export class CreateMigrationIndex {
  public execute(): string {
    return `import type { DataSource } fr\om 'typeorm';
import { Connection } fr\om '../index';

async function mysqlMigrations(mysql: DataSource): Promise<void> {
  await mysql.runMigrations();
  return mysql.destroy();
}

(async function main(): Promise<void> {
  const connection = new Connection(process.argv[2]);
  await connection.connect();

  return mysqlMigrations(connection.mysql);
})();
`;
  }
}
