export class CreateMysqlDataSource {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

const dataSources: { [key: string]: DataSource } = {};

export const MysqlDataSource = (database: string) => {
  if (!dataSources[database]) {
    dataSources[database] = new DataSource({
      type: 'mysql',
      name: database,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.NODE_ENV === 'test' ? 'database_test' : database,
      synchronize: process.env.NODE_ENV !== 'production',
      entities: [\`\${__dirname}/../../../modules/**/entities/*.{js,ts}\`],
      migrations: [\`\${__dirname}/../migrations/*.{js,ts}\`],
      // logging: true,
    });
  }

  return dataSources[database];
};
`;
  }
}
