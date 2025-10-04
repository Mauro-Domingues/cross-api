export class CreateSeedExample {
  public execute(): string {
    return `import { v4 as uuid } ${'from'} 'uuid';
import { DataSource, QueryRunner } ${'from'} 'typeorm';

export async function seedExample(
  dataSource: DataSource,
  trx: QueryRunner,
): Promise<void> {
  return dataSource
    .query(
      'INSERT INTO examples (id, name, description) VALUES (?, ?, ?);',
      [uuid(), 'example', 'this is an example'],
      trx,
    )
    .then(() => console.log('Example seeded'));
}
`;
  }
}
