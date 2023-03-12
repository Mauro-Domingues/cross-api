export class CreateDataSource {
  public execute(): string {
    return `import { DataSource } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:
    process.env.NODE_ENV === 'test' ? 'database_test' : process.env.DB_DATABASE,
  // synchronize: true,
  // logging: true,
  entities: [\`\${__dirname}/../../modules/**/entities/*.{js,ts}\`],
  // subscribers: [],
  migrations: [\`\${__dirname}/migrations/*.{js,ts}\`],
});
`;
  }
}
