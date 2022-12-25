export default function createTypeorm(): string {
  return `import { Connection, createConnection } from 'typeorm';
import { AppDataSource } from '../../../dataSource';

export default async (): Promise<Connection> => {
  return createConnection(AppDataSource.options);
};
`;
}
