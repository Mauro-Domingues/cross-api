export class CreateMysqlDataSource {
  public execute(): string {
    return `import { DataSource } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

const dataSources = new Map<string, DataSource>();

export const MysqlDataSource = (database: string): DataSource => {
  if (!dataSources.has(database)) {
    const dataSource = new DataSource({
      type: 'mysql',
      name: database,
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.NODE_ENV === 'test' ? 'database_test' : database,
      synchronize: process.env.NODE_ENV !== 'production',
      entities: [\`\${__dirname}/../../../modules/**/entities/*.{js,ts}\`],
      migrations: [\`\${__dirname}/../migrations/*.{js,ts}\`],
      // logging: true,
    });

    dataSources.set(database, dataSource);
  }

  return dataSources.get(database)!;
};
`;
  }
}
